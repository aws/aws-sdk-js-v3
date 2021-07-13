import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { RDSDataClientConfig } from "./RDSDataClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: RDSDataClientConfig) => ({
  apiVersion: "2018-08-01",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "RDS Data"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
