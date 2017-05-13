import {isNativeCode} from "../lib/isNativeCode";

describe('isNativeCode', () => {
    it(
        'should return true if the function string indicates it is native code',
        () => {
            const originalToString = Function.prototype.toString;
            try {
                Function.prototype.toString = () => 'function name() { [native code] }';
                expect(isNativeCode(() => {})).toBe(true);
            } finally {
                Function.prototype.toString = originalToString;
            }
        }
    );

    it(
        'should return false if the function string does not indicate it contains native code',
        () => {
            expect(isNativeCode(() => {})).toBe(false);
        }
    );
});
