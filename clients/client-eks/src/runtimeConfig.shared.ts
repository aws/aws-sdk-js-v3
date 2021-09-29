import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { EKSClientConfig } from "./EKSClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: EKSClientConfig) => ({
  apiVersion: "2017-11-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "EKS",
  urlParser: config?.urlParser ?? parseUrl,
});
