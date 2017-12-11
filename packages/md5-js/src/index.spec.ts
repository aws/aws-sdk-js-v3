import {Md5} from './';
import {fromBase64} from '@aws/util-base64-universal';
import {toHex} from '@aws/util-hex-encoding';
const hashVectors = require('hash-test-vectors');

describe('Md5', () => {
    let idx = 0;
    for (const {input, ...results} of hashVectors) {
        const expected = results['md5'];
        it(
            `should calculate a MD5 hash of ${expected} for test vector ${++idx}`,
            async () => {
                const hash = new Md5();
                hash.update(fromBase64(input));
                expect(toHex(await hash.digest())).toBe(expected);
            }
        );
    }
});
