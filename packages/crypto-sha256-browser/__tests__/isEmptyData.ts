import {isEmptyData, emptyDataSha256} from "../lib/isEmptyData";
import {Buffer} from 'buffer';
import {createHash} from 'crypto';

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

describe('emptyDataSha256', () => {
    it(
        'should return a promise that is fulfilled with the SHA-256 of empty data',
        async () => {
            const hash = createHash('sha256').update('').digest();

            expect(
                hash.equals(Buffer.from((await emptyDataSha256()).buffer))
            ).toBe(true);
        }
    );
});
