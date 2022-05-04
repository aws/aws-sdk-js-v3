// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultRegionInfoProvider } from "./endpoints";
import { PinpointSMSVoiceV2ClientConfig } from "./PinpointSMSVoiceV2Client";

/**
 * @internal
 */
export const getRuntimeConfig = (config: PinpointSMSVoiceV2ClientConfig) => ({
  apiVersion: "2022-03-31",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Pinpoint SMS Voice V2",
  urlParser: config?.urlParser ?? parseUrl,
});
