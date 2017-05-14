import {randomValues as ie11RandomValues} from './lib/ie11RandomValues';
import {randomValues as webCryptoRandomValues} from './lib/webCryptoRandomValues';
import {randomValues as sjclRandomValues} from './lib/jsRandomValues';
import {isMsWindow} from '@aws/crypto-ie11-detection';
import {supportsWebCrypto} from '@aws/crypto-supports-webCrypto';

export {ie11RandomValues, webCryptoRandomValues, sjclRandomValues};

export function randomValues(byteLength: number): Promise<Uint8Array> {
    if (supportsWebCrypto(window)) {
        return webCryptoRandomValues(byteLength);
    } else if (isMsWindow(window)) {
        return ie11RandomValues(byteLength);
    }

    return sjclRandomValues(byteLength);
}
