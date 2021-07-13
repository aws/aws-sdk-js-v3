import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { OpsWorksClientConfig } from "./OpsWorksClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: OpsWorksClientConfig) => ({
  apiVersion: "2013-02-18",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "OpsWorks"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
