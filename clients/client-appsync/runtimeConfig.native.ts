import { Sha256 } from "@aws-crypto/sha256-js";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { AppSyncClientConfig } from "./AppSyncClient";
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";

/**
 * @internal
 */
export const getRuntimeConfig = (config: AppSyncClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    runtime: "react-native",
    sha256: coalesce(config.sha256, Sha256),
  };
};
