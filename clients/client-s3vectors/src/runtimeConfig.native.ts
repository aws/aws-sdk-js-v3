// smithy-typescript generated code
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import type { S3VectorsClientConfig } from "./S3VectorsClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: S3VectorsClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
