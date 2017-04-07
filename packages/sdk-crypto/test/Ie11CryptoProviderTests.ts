/// <reference types="chai"/>

import CryptoProvider from "../CryptoProvider";
import Ie11CryptoProvider from "../Ie11CryptoProvider/index";
import {
    HASH_TEST_CASES,
    hexEncode,
    HMAC_TEST_CASES,
    isNode,
} from './TestCases';
import {isMsWindow} from "../Ie11CryptoProvider/MsWindow";
import {expect} from 'chai';

describe('Ie11CryptoProvider', function () {
    let instance: CryptoProvider;
    before(function() {
        if (isNode() || typeof window === 'undefined' || !isMsWindow(window)) {
            this.skip();
        } else {
            instance = new Ie11CryptoProvider();
        }
    });

    for (let testCase of HASH_TEST_CASES) {
        it(
            `should produce a digest of ${testCase.expectedHash} for ${testCase.description}`,
            done => {
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
