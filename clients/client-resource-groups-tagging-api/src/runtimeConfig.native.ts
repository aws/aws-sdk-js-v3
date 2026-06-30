// smithy-typescript generated code
import type { ResourceGroupsTaggingAPIClientConfig } from "./ResourceGroupsTaggingAPIClient";
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ResourceGroupsTaggingAPIClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
