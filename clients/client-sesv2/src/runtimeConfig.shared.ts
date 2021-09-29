import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { SESv2ClientConfig } from "./SESv2Client";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SESv2ClientConfig) => ({
  apiVersion: "2019-09-27",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "SESv2",
  urlParser: config?.urlParser ?? parseUrl,
});
