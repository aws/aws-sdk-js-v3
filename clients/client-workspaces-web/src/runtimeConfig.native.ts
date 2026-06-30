// smithy-typescript generated code
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import type { WorkSpacesWebClientConfig } from "./WorkSpacesWebClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: WorkSpacesWebClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
