import { runtimeConfig as browserConfig } from "./runtimeConfig.browser";

/**
 * @internal
 */
export const runtimeConfig = {
  ...browserConfig,
  runtime: "react-native",
};
