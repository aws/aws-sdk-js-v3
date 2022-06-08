// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultRegionInfoProvider } from "./endpoints";
import { M2ClientConfig } from "./M2Client";

/**
 * @internal
 */
export const getRuntimeConfig = (config: M2ClientConfig) => ({
  apiVersion: "2021-04-28",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "m2",
  urlParser: config?.urlParser ?? parseUrl,
});
