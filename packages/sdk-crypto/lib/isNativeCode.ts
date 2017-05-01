const nativeCodeRegex = /\[native code]/;

export function isNativeCode(func: Function): boolean {
    try {
        if (nativeCodeRegex.test(Function.prototype.toString.call(func))) {
            return true;
        }
    } catch (e) {}

    return false;
}
