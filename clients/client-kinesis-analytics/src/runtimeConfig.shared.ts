import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { KinesisAnalyticsClientConfig } from "./KinesisAnalyticsClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: KinesisAnalyticsClientConfig) => ({
  apiVersion: "2015-08-14",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Kinesis Analytics",
  urlParser: config?.urlParser ?? parseUrl,
});
