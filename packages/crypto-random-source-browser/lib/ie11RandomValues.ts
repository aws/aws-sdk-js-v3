import {MsWindow} from '@aws/crypto-ie11-detection';

export function randomValues(byteLength: number): Promise<Uint8Array> {
    return new Promise(resolve => {
        const randomBytes = new Uint8Array(byteLength);
        (window as MsWindow).msCrypto.getRandomValues(randomBytes);

        resolve(randomBytes);
    });
}
