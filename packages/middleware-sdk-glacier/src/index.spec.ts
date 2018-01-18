import {
    addChecksumHeaders,
    addGlacierApiVersion,
    validateAccountId
} from './index';

describe('middleware-sdk-glacier package exports', () => {
    it('addChecksumHeaders', () => {
        expect(typeof addChecksumHeaders).toBe('function');
    });

    it('addGlacierApiVersion', () => {
        expect(typeof addGlacierApiVersion).toBe('function');
    });

    it('validateAccountId', () => {
        expect(typeof validateAccountId).toBe('function');
    });
});