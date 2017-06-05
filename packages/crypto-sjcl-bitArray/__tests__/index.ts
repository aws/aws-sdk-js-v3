import * as bitArray from '../';

describe('bitArray', () => {
    it('should properly export the appropriate SJCL functions', () => {
        expect(typeof bitArray.bitSlice).toBe('function');
        expect(typeof bitArray.extract).toBe('function');
        expect(typeof bitArray.concat).toBe('function');
        expect(typeof bitArray.bitLength).toBe('function');
        expect(typeof bitArray.clamp).toBe('function');
        expect(typeof bitArray.partial).toBe('function');
        expect(typeof bitArray.getPartial).toBe('function');
        expect(typeof bitArray.equal).toBe('function');
        expect(typeof bitArray._shiftRight).toBe('function');
        expect(typeof bitArray._xor4).toBe('function');
        expect(typeof bitArray.byteswapM).toBe('function');
    });
});
