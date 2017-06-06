import {randomValues as IRandomValues} from '@aws/types';

/**
 * @implements {IRandomValues}
 */
export function randomValues(byteLength: number): Promise<Uint8Array> {
    return new Promise(resolve => {
        const randomBytes = new Uint8Array(byteLength);
        self.crypto.getRandomValues(randomBytes);

        resolve(randomBytes);
    });
}
