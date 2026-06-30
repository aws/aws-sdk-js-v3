// smithy-typescript generated code
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import type { SocialMessagingClientConfig } from "./SocialMessagingClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SocialMessagingClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
