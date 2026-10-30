export const lazyLog = <T extends object>(value: T): T =>
  Object.defineProperty(value, "toJSON", { value: () => ({ ...value }) });
