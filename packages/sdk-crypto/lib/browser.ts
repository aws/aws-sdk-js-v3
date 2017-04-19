import BrowserCryptoProvider from "./BrowserCryptoProvider";
import CryptoProvider, {ProviderOptions} from "./CryptoProvider";
import Ie11CryptoProvider from './Ie11CryptoProvider';
import PureJsCryptoProvider from "./PureJsCryptoProvider";
import supportsWebCrypto from './supportsWebCrypto';
import {isMsWindow} from './Ie11CryptoProvider/MsWindow';

const instanceCache: {[key: string]: CryptoProvider} = {};

export function getProviderInstance(
    options: ProviderOptions = {}
): CryptoProvider {
    const cacheKey = `inputEncoding=${options.inputEncoding}`;
    if (!(cacheKey in instanceCache)) {
        instanceCache[cacheKey] = instantiateProvider(options);
    }

    return instanceCache[cacheKey];
}

function instantiateProvider(options: ProviderOptions): CryptoProvider {
    if (isMsWindow(window)) {
        return new Ie11CryptoProvider(options);
    } else if (supportsWebCrypto(window)) {
        return new BrowserCryptoProvider(options);
    }

    return new PureJsCryptoProvider(options);
}
