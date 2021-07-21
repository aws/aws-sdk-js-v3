import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { KinesisVideoClientConfig } from "./KinesisVideoClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: KinesisVideoClientConfig) => ({
  apiVersion: "2017-09-30",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "Kinesis Video",
  urlParser: config.urlParser ?? parseUrl,
});
