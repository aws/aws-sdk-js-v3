import * as browser from '../';

describe('exported symbols', () => {
    it('should export each implementation as a stable symbol', () => {
        expect(typeof browser.Ie11Sha256).toBe('function');
        expect(typeof browser.JsSha256).toBe('function');
        expect(typeof browser.Sha256).toBe('function');
        expect(typeof browser.WebCryptoSha256).toBe('function');
    });
});
