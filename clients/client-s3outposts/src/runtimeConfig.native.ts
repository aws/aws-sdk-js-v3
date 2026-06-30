// smithy-typescript generated code
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import type { S3OutpostsClientConfig } from "./S3OutpostsClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: S3OutpostsClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
