import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { KinesisClientConfig } from "./KinesisClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: KinesisClientConfig) => ({
  apiVersion: "2013-12-02",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Kinesis",
  urlParser: config?.urlParser ?? parseUrl,
});
