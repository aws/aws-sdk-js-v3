const nativeCodeRegex = /\[native code]/;

/**
 * A best-effort check to see if a function is user-defined or provided by the
 * browser. This is a heuristic rather than something 100% accurate.
 *
 * @internal
 */
export function isNativeCode(func: Function): boolean {
    try {
        if (nativeCodeRegex.test(Function.prototype.toString.call(func))) {
            return true;
        }
    } catch (e) {}

    return false;
}
