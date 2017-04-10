import NodeCryptoProvider from '../lib/NodeCryptoProvider';
import {
    HASH_TEST_CASES,
    hexEncode,
    HMAC_TEST_CASES,
    isNode,
} from './TestCases';
import {expect} from 'chai';

describe('NodeCryptoProvider', () => {
    const instance = new NodeCryptoProvider();

    before(function() {
        if (!isNode()) {
            this.skip();
        }
    });

    for (let testCase of HASH_TEST_CASES) {
        it(
            `should produce a digest of ${testCase.expectedHash} for ${testCase.description}`,
            done => {
                instance.sha256Digest(testCase.toHash)
                    .then(hash => {
                        expect(hexEncode(hash))
                            .to.equal(testCase.expectedHash);
                        done();
                    });
            }
        );
    }

    for (let testCase of HMAC_TEST_CASES) {
        it(
            `should produce a signature of ${testCase.expectedHash} for ${testCase.description}`,
            done => {
                instance.hmacSha256(testCase.toHash, testCase.secret)
                    .then(hash => {
                        expect(hexEncode(hash)).to.equal(testCase.expectedHash);
                        done();
                    });
            }
        );
    }

    it('should produce random bytes on demand', done => {
        instance.randomValues(8).then(() => done(), done);
    });
});