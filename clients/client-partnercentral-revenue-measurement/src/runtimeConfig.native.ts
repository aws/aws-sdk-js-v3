// smithy-typescript generated code
import type { PartnerCentralRevenueMeasurementClientConfig } from "./PartnerCentralRevenueMeasurementClient";
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";

/**
 * @internal
 */
export const getRuntimeConfig = (config: PartnerCentralRevenueMeasurementClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
  };
};
