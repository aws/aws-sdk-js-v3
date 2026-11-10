export const setKey = <T>(object: Record<string, T>, key: string, value: T): void => {
  if (key === "__proto__") {
    Object.defineProperty(object, key, { value, writable: true, enumerable: true, configurable: true });
  } else {
    object[key] = value;
  }
};
