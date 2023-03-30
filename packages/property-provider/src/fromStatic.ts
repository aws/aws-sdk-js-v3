import { Provider } from "@aws-sdk/types";

/**
 * @internal
 */
export const fromStatic =
  <T>(staticValue: T): Provider<T> =>
  () =>
    Promise.resolve(staticValue);
