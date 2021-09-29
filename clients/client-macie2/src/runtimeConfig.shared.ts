import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { Macie2ClientConfig } from "./Macie2Client";

/**
 * @internal
 */
export const getRuntimeConfig = (config: Macie2ClientConfig) => ({
  apiVersion: "2020-01-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Macie2",
  urlParser: config?.urlParser ?? parseUrl,
});
