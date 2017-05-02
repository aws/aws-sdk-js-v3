/// <reference types="mocha"/>

import {BrowserCryptoProvider} from '../lib/BrowserCryptoProvider';
import {CryptoProvider} from "@aws/types";
import {isNode} from './TestCases';
import {expect} from 'chai';
import {supportsWebCrypto} from "../lib/supportsWebCrypto";
import {WebCryptoProvider} from "../lib/WebCryptoProvider";
import {isMsWindow} from "../lib/Ie11CryptoProvider/MsWindow";
import {Ie11CryptoProvider} from "../lib/Ie11CryptoProvider/index";
import {PureJsCryptoProvider} from "../lib/PureJsCryptoProvider";

describe('BrowserCryptoProvider', function () {
    let instance: CryptoProvider;
    before(function () {
        if (!isNode() && typeof window !== 'undefined') {
            instance = new BrowserCryptoProvider();
        } else {
            this.skip();
        }
    });

    it('should use a WebCryptoProvider in a modern browser', () => {
        const inst = <any>instance;
        if (supportsWebCrypto(window)) {
            expect(inst.provider).to.be.instanceof(WebCryptoProvider);
        } else {
            expect(inst.provider).not.to.be.instanceof(WebCryptoProvider);
        }
    });

    it('should use an Ie11CryptoProvider in IE11', () => {
        const inst = <any>instance;
        if (isMsWindow(window)) {
            expect(inst.provider).to.be.instanceof(Ie11CryptoProvider);
        } else {
            expect(inst.provider).not.to.be.instanceof(Ie11CryptoProvider);
        }
    });

    it('should use a PureJsCryptoProvider in other browsers', () => {
        const inst = <any>instance;
        if (!isMsWindow(window) && !supportsWebCrypto(window)) {
            expect(inst.provider).to.be.instanceof(PureJsCryptoProvider);
        } else {
            expect(inst.provider).not.to.be.instanceof(PureJsCryptoProvider);
        }
    });
});
