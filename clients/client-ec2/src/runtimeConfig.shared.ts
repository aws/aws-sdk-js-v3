import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { EC2ClientConfig } from "./EC2Client";

/**
 * @internal
 */
export const getRuntimeConfig = (config: EC2ClientConfig) => ({
  apiVersion: "2016-11-15",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "EC2",
  urlParser: config?.urlParser ?? parseUrl,
});
