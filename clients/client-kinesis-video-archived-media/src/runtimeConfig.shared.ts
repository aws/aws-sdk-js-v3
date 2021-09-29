import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { KinesisVideoArchivedMediaClientConfig } from "./KinesisVideoArchivedMediaClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: KinesisVideoArchivedMediaClientConfig) => ({
  apiVersion: "2017-09-30",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Kinesis Video Archived Media",
  urlParser: config?.urlParser ?? parseUrl,
});
