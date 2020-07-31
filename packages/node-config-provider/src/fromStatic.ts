import { fromStatic as convertToProvider } from "@aws-sdk/property-provider";
import { Provider } from "@aws-sdk/types";

export type FromStaticOptions<T> = T | (() => T);
type Getter<T> = () => T;
const isFunction = <T>(func: FromStaticOptions<T>): func is Getter<T> => typeof func === "function";

export const fromStatic = <T>(defaultValue: FromStaticOptions<T>): Provider<T> =>
  isFunction(defaultValue)
    ? async () => {
        return defaultValue();
      }
    : convertToProvider(defaultValue);
