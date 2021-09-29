import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { S3OutpostsClientConfig } from "./S3OutpostsClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: S3OutpostsClientConfig) => ({
  apiVersion: "2017-07-25",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "S3Outposts",
  urlParser: config?.urlParser ?? parseUrl,
});
