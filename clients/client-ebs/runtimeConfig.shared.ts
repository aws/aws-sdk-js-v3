import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { EBSClientConfig } from "./EBSClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: EBSClientConfig) => ({
  apiVersion: "2019-11-02",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "EBS"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
