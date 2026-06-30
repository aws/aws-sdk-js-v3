// smithy-typescript generated code
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import type { SagemakerJobRuntimeClientConfig } from "./SagemakerJobRuntimeClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SagemakerJobRuntimeClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
