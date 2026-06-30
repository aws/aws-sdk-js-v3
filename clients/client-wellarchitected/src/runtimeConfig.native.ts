// smithy-typescript generated code
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import type { WellArchitectedClientConfig } from "./WellArchitectedClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: WellArchitectedClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
