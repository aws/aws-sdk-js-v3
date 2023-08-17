// smithy-typescript generated code
import { Sha256 } from "@aws-crypto/sha256-js";

import { PinpointSMSVoiceV2ClientConfig } from "./PinpointSMSVoiceV2Client";
import { getRuntimeConfig as getBrowserRuntimeConfig } from "./runtimeConfig.browser";

/**
 * @internal
 */
export const getRuntimeConfig = (config: PinpointSMSVoiceV2ClientConfig) => {
  const browserDefaults = getBrowserRuntimeConfig(config);
  return {
    ...browserDefaults,
    ...config,
    runtime: "react-native",
    sha256: config?.sha256 ?? Sha256,
  };
};
