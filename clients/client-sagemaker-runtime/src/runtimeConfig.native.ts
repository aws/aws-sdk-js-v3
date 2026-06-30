// smithy-typescript generated code
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import type { SageMakerRuntimeClientConfig } from "./SageMakerRuntimeClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SageMakerRuntimeClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
