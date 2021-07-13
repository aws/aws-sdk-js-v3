import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { RedshiftDataClientConfig } from "./RedshiftDataClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: RedshiftDataClientConfig) => ({
  apiVersion: "2019-12-20",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "Redshift Data"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
