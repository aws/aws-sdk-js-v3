export enum SelectorType {
  ENV = "env",
  CONFIG = "shared config entry",
}

/**
 * Returns undefined, if obj[key] is not defined.
 * Returns string value, if the string is defined in obj[key] and it's uppercase matches union value.
 * Throws error for all other cases.
 *
 * @internal
 */
export const stringUnionSelector = (
  obj: Record<string, string | undefined>,
  key: string,
  union: Record<string, string>,
  type: SelectorType
): (typeof union)[keyof typeof union] | undefined => {
  if (!(key in obj)) return undefined;

  const value = obj[key]!.toUpperCase();
  if (!Object.values(union).includes(value)) {
    throw new TypeError(`Cannot load ${type} '${key}'. Expected one of ${Object.values(union)}, got '${obj[key]}'.`);
  }

  return value;
};
