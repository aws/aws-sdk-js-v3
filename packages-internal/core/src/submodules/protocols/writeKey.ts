/**
 * Makes __proto__ writable on a given object.
 */
export function writeKey(obj: object | Record<string, unknown> | any) {
  Object.defineProperty(obj, "__proto__", { value: undefined, writable: true, enumerable: true, configurable: true });
}
