import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { GreengrassV2ClientConfig } from "./GreengrassV2Client";

/**
 * @internal
 */
export const getRuntimeConfig = (config: GreengrassV2ClientConfig) => ({
  apiVersion: "2020-11-30",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "GreengrassV2",
  urlParser: config?.urlParser ?? parseUrl,
});
