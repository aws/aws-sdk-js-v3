import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { ECRClientConfig } from "./ECRClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ECRClientConfig) => ({
  apiVersion: "2015-09-21",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "ECR",
  urlParser: config?.urlParser ?? parseUrl,
});
