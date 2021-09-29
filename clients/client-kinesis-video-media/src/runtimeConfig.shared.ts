import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { KinesisVideoMediaClientConfig } from "./KinesisVideoMediaClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: KinesisVideoMediaClientConfig) => ({
  apiVersion: "2017-09-30",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Kinesis Video Media",
  urlParser: config?.urlParser ?? parseUrl,
});
