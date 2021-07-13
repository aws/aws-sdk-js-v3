import { Sha256 } from "@aws-crypto/sha256-js";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { EFSClientConfig } from "./EFSClient";
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";

/**
 * @internal
 */
export const getRuntimeConfig = (config: EFSClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    runtime: "react-native",
    sha256: coalesce(config.sha256, Sha256),
  };
};
