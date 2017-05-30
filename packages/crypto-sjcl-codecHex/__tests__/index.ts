import {bitLength} from '@aws/crypto-sjcl-bitArray';
import * as codecHex from '../';

describe('codecString', () => {
    it('should properly export the appropriate SJCL functions', () => {
        expect(typeof codecHex.fromBits).toBe('function');
        expect(typeof codecHex.toBits).toBe('function');
    });

    it('should be able to round-trip strings to and from bits', () => {
        const hexValue = 'deadbeef';
        const bitArray = codecHex.toBits('deadbeef');

        expect(bitLength(bitArray)).toBe(32);
        expect(codecHex.fromBits(bitArray)).toBe(hexValue);
    });
});
