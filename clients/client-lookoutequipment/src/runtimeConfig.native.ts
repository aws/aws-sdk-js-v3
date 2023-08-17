// smithy-typescript generated code
import { Sha256 } from "@aws-crypto/sha256-js";

import { LookoutEquipmentClientConfig } from "./LookoutEquipmentClient";
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";

/**
 * @internal
 */
export const getRuntimeConfig = (config: LookoutEquipmentClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
    sha256: config?.sha256 ?? Sha256,
  };
};
