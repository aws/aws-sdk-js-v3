// smithy-typescript generated code
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import type { WorkSpacesClientConfig } from "./WorkSpacesClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: WorkSpacesClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
