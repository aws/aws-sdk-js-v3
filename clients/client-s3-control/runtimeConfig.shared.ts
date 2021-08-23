import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { S3ControlClientConfig } from "./S3ControlClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: S3ControlClientConfig) => ({
  apiVersion: "2018-08-20",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "S3 Control",
  urlParser: config?.urlParser ?? parseUrl,
});
