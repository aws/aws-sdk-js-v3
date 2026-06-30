// smithy-typescript generated code
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import type { SimpleDBv2ClientConfig } from "./SimpleDBv2Client";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SimpleDBv2ClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
