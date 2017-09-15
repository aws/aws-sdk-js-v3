import {isEmptyData} from "./isEmptyData";

describe('isEmptyData', () => {
    it('should return true for an empty string', () => {
        expect(isEmptyData('')).toBe(true);
    });

    it('should return false for a non-empty string', () => {
        expect(isEmptyData('foo')).toBe(false);
    });

    it('should return true for an empty ArrayBuffer', () => {
        expect(isEmptyData(new ArrayBuffer(0))).toBe(true);
    });

    it('should return false for a non-empty ArrayBuffer', () => {
        expect(isEmptyData(new ArrayBuffer(1))).toBe(false);
    });

    it('should return true for an empty ArrayBufferView', () => {
        expect(isEmptyData(new Uint8Array(0))).toBe(true);
    });

    it('should return false for a non-empty ArrayBufferView', () => {
        expect(isEmptyData(Uint8Array.from([0]))).toBe(false);
    });
});
