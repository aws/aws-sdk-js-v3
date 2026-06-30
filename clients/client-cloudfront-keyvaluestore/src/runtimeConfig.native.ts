// smithy-typescript generated code
import type { CloudFrontKeyValueStoreClientConfig } from "./CloudFrontKeyValueStoreClient";
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CloudFrontKeyValueStoreClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
