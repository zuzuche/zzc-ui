/**
 * Created by Lam on 17/1/24.
 */
import React, {Component} from "react";
import ReactDOM from "react-dom";
import Base from "../tool/base";
import "./style.scss";

function info (...arg){

    if (document.querySelector('.toast-box')) {
        return false;
    }

    let content = arg[0],
        duration = parseInt(arg[1] || 3000),
        onClose = arg[2] && arg[2] instanceof Function ? arg[2] : function(){},
        elem = document.createElement('div');

    elem.className = 'toast-box';
    document.body.appendChild(elem);

    ReactDOM.render(
        <div className='toast-content'>
            <p dangerouslySetInnerHTML={{__html: content}} />
        </div>,elem
    )


    setTimeout(() => {
        info.prototype.toastChange(elem,duration,onClose)
    },100);

}

info.prototype = new Base;

export default info;