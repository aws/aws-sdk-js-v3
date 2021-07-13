import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { ECRPUBLICClientConfig } from "./ECRPUBLICClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ECRPUBLICClientConfig) => ({
  apiVersion: "2020-10-30",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "ECR PUBLIC"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
