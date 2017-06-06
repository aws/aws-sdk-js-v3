import {fromBits} from '@aws/crypto-sjcl-codecArrayBuffer'
import {
    isReady,
    randomWords,
    startCollectors,
    stopCollectors,
} from '@aws/crypto-sjcl-random';
import {randomValues as IRandomValues} from '@aws/types';

/**
 * @implements {IRandomValues}
 */
export function randomValues(byteLength: number): Promise<Uint8Array> {
    return new Promise((resolve, reject) => {
        if (!isReady()) {
            startCollectors();

            return setTimeout(() => {
                randomValues(byteLength)
                    .then(resolve, reject);
            }, 0);
        }

        const words = randomWords(Math.ceil(byteLength / 4));
        stopCollectors();

        resolve(new Uint8Array(fromBits(words, 0, 0).slice(0, byteLength)));
    });
}

