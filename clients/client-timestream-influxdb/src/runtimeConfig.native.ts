// smithy-typescript generated code
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import type { TimestreamInfluxDBClientConfig } from "./TimestreamInfluxDBClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: TimestreamInfluxDBClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
