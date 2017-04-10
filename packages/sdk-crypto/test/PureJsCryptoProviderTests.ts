import PureJsCryptoProvider from '../lib/PureJsCryptoProvider';
import {
    HASH_TEST_CASES,
    hexEncode,
    HMAC_TEST_CASES,
} from './TestCases';
import {expect} from 'chai';

describe('PureJsCryptoProvider', () => {
    const instance = new PureJsCryptoProvider();

    for (let testCase of HASH_TEST_CASES) {
        it(
            `should produce a digest of ${testCase.expectedHash} for ${testCase.description}`,
            (done) => {
                instance.sha256Digest(testCase.toHash)
                    .then(hash => {
                        expect(hexEncode(hash)).to.equal(testCase.expectedHash);
                        done();
                    });
            }
        );
    }

    for (let testCase of HMAC_TEST_CASES) {
        it(
            `should produce a signature of ${testCase.expectedHash} for ${testCase.description}`,
            (done) => {
                instance.hmacSha256(testCase.toHash, testCase.secret)
                    .then(hash => {
                        expect(hexEncode(hash)).to.equal(testCase.expectedHash);
                        done();
                    });
            }
        );
    }

    it('should produce random bytes in all environments', done => {
        instance.randomValues(8).then(() => done(), done);
    });
});