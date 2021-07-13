import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { DataPipelineClientConfig } from "./DataPipelineClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: DataPipelineClientConfig) => ({
  apiVersion: "2012-10-29",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "Data Pipeline"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
