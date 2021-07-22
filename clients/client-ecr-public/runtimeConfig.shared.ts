import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { ECRPUBLICClientConfig } from "./ECRPUBLICClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ECRPUBLICClientConfig = {}) => ({
  apiVersion: "2020-10-30",
  disableHostPrefix: config.disableHostPrefix ?? false,
  logger: config.logger ?? ({} as __Logger),
  regionInfoProvider: config.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config.serviceId ?? "ECR PUBLIC",
  urlParser: config.urlParser ?? parseUrl,
});
