import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { WAFV2ClientConfig } from "./WAFV2Client";

/**
 * @internal
 */
export const getRuntimeConfig = (config: WAFV2ClientConfig) => ({
  apiVersion: "2019-07-29",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "WAFV2",
  urlParser: config?.urlParser ?? parseUrl,
});
