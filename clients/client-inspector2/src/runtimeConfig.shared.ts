// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultRegionInfoProvider } from "./endpoints";
import { Inspector2ClientConfig } from "./Inspector2Client";

/**
 * @internal
 */
export const getRuntimeConfig = (config: Inspector2ClientConfig) => ({
  apiVersion: "2020-06-08",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Inspector2",
  urlParser: config?.urlParser ?? parseUrl,
});
