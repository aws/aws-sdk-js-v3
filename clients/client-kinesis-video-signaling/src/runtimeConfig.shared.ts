import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { KinesisVideoSignalingClientConfig } from "./KinesisVideoSignalingClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: KinesisVideoSignalingClientConfig) => ({
  apiVersion: "2019-12-04",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Kinesis Video Signaling",
  urlParser: config?.urlParser ?? parseUrl,
});
