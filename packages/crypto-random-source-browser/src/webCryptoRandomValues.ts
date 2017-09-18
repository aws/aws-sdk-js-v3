import {randomValues as IRandomValues} from '@aws/types';
import {locateWindow} from '@aws/util-locate-window';

/**
 * @implements {IRandomValues}
 */
export function randomValues(byteLength: number): Promise<Uint8Array> {
    return new Promise(resolve => {
        const randomBytes = new Uint8Array(byteLength);
        locateWindow().crypto.getRandomValues(randomBytes);

        resolve(randomBytes);
    });
}
