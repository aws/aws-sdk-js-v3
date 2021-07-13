import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { RDSClientConfig } from "./RDSClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: RDSClientConfig) => ({
  apiVersion: "2014-10-31",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "RDS"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
