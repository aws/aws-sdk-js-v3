import { fromStatic as convertToProvider } from "@aws-sdk/property-provider";
import { Provider } from "@aws-sdk/types";

export type FromStaticConfig<T> = T | (() => T) | Provider<T>;
type Getter<T> = (() => T) | Provider<T>;
const isFunction = <T>(func: FromStaticConfig<T>): func is Getter<T> => typeof func === "function";

export const fromStatic = <T>(defaultValue: FromStaticConfig<T>): Provider<T> =>
  isFunction(defaultValue) ? async () => await defaultValue() : convertToProvider(defaultValue);
