import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { SyntheticsClientConfig } from "./SyntheticsClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SyntheticsClientConfig) => ({
  apiVersion: "2017-10-11",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "synthetics"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
