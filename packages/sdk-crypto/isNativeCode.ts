const nativeCodeRegex = /\[native code]/;
export default function isNativeCode(func: Function): boolean {
    try {
        if (nativeCodeRegex.test(Function.prototype.toString.call(func))) {
            return true;
        }
    } catch (e) {}

    return false;
}
