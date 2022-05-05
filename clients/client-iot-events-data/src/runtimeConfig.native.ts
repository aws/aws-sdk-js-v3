// smithy-typescript generated code
import { Sha256 } from "@aws-crypto/sha256-js";

import { IoTEventsDataClientConfig } from "./IoTEventsDataClient";
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IoTEventsDataClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
    sha256: config?.sha256 ?? Sha256,
  };
};
