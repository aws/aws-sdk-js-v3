// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { CloudHSMV2ClientConfig } from "./CloudHSMV2Client";
import { defaultRegionInfoProvider } from "./endpoints";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CloudHSMV2ClientConfig) => ({
  apiVersion: "2017-04-28",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "CloudHSM V2",
  urlParser: config?.urlParser ?? parseUrl,
});
