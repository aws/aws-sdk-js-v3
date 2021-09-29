import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { KMSClientConfig } from "./KMSClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: KMSClientConfig) => ({
  apiVersion: "2014-11-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "KMS",
  urlParser: config?.urlParser ?? parseUrl,
});
