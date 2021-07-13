import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { ACMPCAClientConfig } from "./ACMPCAClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ACMPCAClientConfig) => ({
  apiVersion: "2017-08-22",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "ACM PCA"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
