import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { CloudWatchEventsClientConfig } from "./CloudWatchEventsClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CloudWatchEventsClientConfig) => ({
  apiVersion: "2015-10-07",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "CloudWatch Events",
  urlParser: config.urlParser ?? parseUrl,
});
