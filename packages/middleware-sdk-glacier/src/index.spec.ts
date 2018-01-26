import {
    addGlacierApiVersion,
    validateAccountId
} from './index';

describe('middleware-sdk-glacier package exports', () => {
    it('addGlacierApiVersion', () => {
        expect(typeof addGlacierApiVersion).toBe('function');
    });

    it('validateAccountId', () => {
        expect(typeof validateAccountId).toBe('function');
    });
});