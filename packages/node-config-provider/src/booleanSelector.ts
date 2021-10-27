export enum SelectorType {
  ENV = "env",
  CONFIG = "shared config entry",
}

export const booleanSelector = (obj: { [key: string]: string }, key: string, type: SelectorType) => {
  if (!(key in obj)) return undefined;
  if (obj[key] === "true") return true;
  if (obj[key] === "false") return false;
  throw new Error(`Cannot load ${type} "${key}". Expected "true" or "false", got ${obj[key]}.`);
};
