import {MsWindow} from '@aws/crypto-ie11-detection';
import {randomValues as IRandomValues} from '@aws/types';

/**
 * @implements {IRandomValues}
 */
export function randomValues(byteLength: number): Promise<Uint8Array> {
    return new Promise(resolve => {
        const randomBytes = new Uint8Array(byteLength);
        (self as MsWindow).msCrypto.getRandomValues(randomBytes);

        resolve(randomBytes);
    });
}
