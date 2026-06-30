// smithy-typescript generated code
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import type { TimestreamQueryClientConfig } from "./TimestreamQueryClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: TimestreamQueryClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
