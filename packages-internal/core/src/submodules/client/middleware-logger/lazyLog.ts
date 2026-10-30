export const lazyLog = <T extends object>(value: T): T => {
  const materialize = () => ({ ...value });
  return Object.defineProperties(value, {
    toJSON: { value: materialize },
    [Symbol.for("nodejs.util.inspect.custom")]: { value: materialize },
  });
};
