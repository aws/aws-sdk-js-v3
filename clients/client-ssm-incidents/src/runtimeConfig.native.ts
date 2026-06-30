// smithy-typescript generated code
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import type { SSMIncidentsClientConfig } from "./SSMIncidentsClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SSMIncidentsClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
