import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { CloudFrontClientConfig } from "./CloudFrontClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CloudFrontClientConfig) => ({
  apiVersion: "2020-05-31",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "CloudFront",
  urlParser: config?.urlParser ?? parseUrl,
});
