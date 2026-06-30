// smithy-typescript generated code
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";
import type { TaxSettingsClientConfig } from "./TaxSettingsClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: TaxSettingsClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
