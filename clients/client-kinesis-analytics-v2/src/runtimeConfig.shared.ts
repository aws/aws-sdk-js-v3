import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { KinesisAnalyticsV2ClientConfig } from "./KinesisAnalyticsV2Client";

/**
 * @internal
 */
export const getRuntimeConfig = (config: KinesisAnalyticsV2ClientConfig) => ({
  apiVersion: "2018-05-23",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Kinesis Analytics V2",
  urlParser: config?.urlParser ?? parseUrl,
});
