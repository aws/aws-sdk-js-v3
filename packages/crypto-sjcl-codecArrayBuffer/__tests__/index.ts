import {bitLength} from '@aws/crypto-sjcl-bitArray';
import * as codecArrayBuffer from '../';

describe('codecArrayBuffer', () => {
    it('should properly export the appropriate SJCL functions', () => {
        expect(typeof codecArrayBuffer.fromBits).toBe('function');
        expect(typeof codecArrayBuffer.toBits).toBe('function');
    });

    it('should be able to round-trip strings to and from bits', () => {
        const values = [0xde, 0xad, 0xbe, 0xef];

        const bitArray = codecArrayBuffer.toBits(Uint8Array.from(values).buffer);
        expect(bitLength(bitArray)).toBe(32);

        const arrayBuffer = codecArrayBuffer.fromBits(bitArray, 0, 0);
        expect(arrayBuffer.byteLength).toBe(4);

        new Uint8Array(arrayBuffer).forEach((num, idx) => {
            expect(values[idx]).toBe(num);
        });
    });
});
