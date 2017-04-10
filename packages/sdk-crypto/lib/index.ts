import CryptoProvider, {ProviderOptions} from "./CryptoProvider";
import NodeCryptoProvider from "./NodeCryptoProvider";

const instanceCache: {[key: string]: CryptoProvider} = {};

export function getProviderInstance(
    options: ProviderOptions = {}
): CryptoProvider {
    const cacheKey = `inputEncoding=${options.inputEncoding}`;
    if (!(cacheKey in instanceCache)) {
        instanceCache[cacheKey] = new NodeCryptoProvider(options);
    }

    return instanceCache[cacheKey];
}
