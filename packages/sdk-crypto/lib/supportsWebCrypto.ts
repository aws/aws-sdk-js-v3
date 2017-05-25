import isNativeCode from "./isNativeCode";

export type SubtleCryptoMethod = 'decrypt'|'digest'|'encrypt'|'exportKey'|'generateKey'|'importKey'|'sign'|'verify';

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

export default function supportsWebCrypto(window: Window): boolean {
    if (
        typeof window === 'object' &&
        typeof window.crypto === 'object' &&
        typeof window.crypto.subtle === 'object'
    ) {
        const {getRandomValues, subtle} = window.crypto;
        const methodsToTest = subtleCryptoMethods
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
