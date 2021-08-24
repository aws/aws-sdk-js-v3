import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { IAMClientConfig } from "./IAMClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IAMClientConfig) => ({
  apiVersion: "2010-05-08",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "IAM",
  urlParser: config?.urlParser ?? parseUrl,
});
