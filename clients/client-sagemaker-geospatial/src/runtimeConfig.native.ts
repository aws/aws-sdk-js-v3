// smithy-typescript generated code
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import type { SageMakerGeospatialClientConfig } from "./SageMakerGeospatialClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SageMakerGeospatialClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
