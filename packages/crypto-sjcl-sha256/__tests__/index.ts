import {fromBits} from '@aws/crypto-sjcl-codecHex';
import Sha256 = require('../');

const EMPTY_STRING_SHA256 = 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855';
const FOO_SHA256 = '2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae';

describe('sha256', () => {
    it('should compute known SHA-256 values', () => {
        expect(fromBits(Sha256.hash(''))).toBe(EMPTY_STRING_SHA256);
        expect(fromBits(Sha256.hash('foo'))).toBe(FOO_SHA256);
    });

    it('should allow incremental calculation of SHA-256 hashes', () => {
        const hash = new Sha256();
        hash.update('f');
        hash.update('o');
        hash.update('o');

        expect(fromBits(hash.finalize())).toBe(FOO_SHA256);
    });
});
