// smithy-typescript generated code
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import type { TimestreamWriteClientConfig } from "./TimestreamWriteClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: TimestreamWriteClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
