import isNativeCode from './isNativeCode';
import {SubtleCryptoMethod} from "./supportsWebCrypto";

interface SafariCrypto extends Crypto {
    webkitSubtle: SubtleCrypto;
}

interface SafariWindow extends Window {
    crypto: SafariCrypto;
}

const subtleCryptoMethods: Array<SubtleCryptoMethod> = [
    'decrypt',
    'digest',
    'encrypt',
    'exportKey',
    'generateKey',
    'importKey',
    'sign',
    'verify',
];

function quacksLikeSafariWindow(window: Window): window is SafariWindow {
    return ('crypto' in window) && ('webkitSubtle' in window.crypto);
}

export function isSafariWindow(window: Window): window is SafariWindow {
    if (quacksLikeSafariWindow(window)) {
        const cryptoMethods = subtleCryptoMethods
            .map<Function>(methodName => window.crypto.webkitSubtle[methodName])
            .concat(window.crypto.getRandomValues);

        for (let method of cryptoMethods) {
            if (!isNativeCode(method)) {
                return false;
            }
        }

        return true;
    }

    return false;
}
