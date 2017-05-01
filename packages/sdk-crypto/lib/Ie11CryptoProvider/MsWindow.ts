import {isNativeCode} from '../isNativeCode';
import {MsSubtleCrypto} from "./MsSubtleCrypto";
import {SubtleCryptoMethod} from "../supportsWebCrypto";

const msSubtleCryptoMethods: Array<SubtleCryptoMethod> = [
    'decrypt',
    'digest',
    'encrypt',
    'exportKey',
    'generateKey',
    'importKey',
    'sign',
    'verify',
];

export interface MsCrypto {
    getRandomValues: (toFill: Uint8Array) => void;
    subtle: MsSubtleCrypto;
}

export interface MsWindow extends Window {
    MSInputMethodContext: any;
    msCrypto: MsCrypto;
}

function quacksLikeAnMsWindow(window: Window): window is MsWindow {
    return 'MSInputMethodContext' in window &&
            'msCrypto' in window;
}

export function isMsWindow(window: Window): window is MsWindow {
    if (quacksLikeAnMsWindow(window) && window.msCrypto.subtle !== undefined) {
        const {getRandomValues, subtle} = window.msCrypto;
        const methodsToTest = msSubtleCryptoMethods
            .map<Function>(methodName => subtle[methodName])
            .concat(getRandomValues);

        for (let method of methodsToTest) {
            if (!isNativeCode(method)) {
                return false;
            }
        }

        return true;
    }

    return false;
}
