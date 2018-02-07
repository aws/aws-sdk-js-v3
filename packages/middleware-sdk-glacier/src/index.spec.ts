import {
    addGlacierApiVersion
} from './index';

describe('middleware-sdk-glacier package exports', () => {
    it('addGlacierApiVersion', () => {
        expect(typeof addGlacierApiVersion).toBe('function');
    });
});