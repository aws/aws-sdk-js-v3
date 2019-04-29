export function isArrayBuffer(arg: any): arg is ArrayBuffer {
  return (
    (typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer) ||
    Object.prototype.toString.call(arg) === "[object ArrayBuffer]"
  );
}
