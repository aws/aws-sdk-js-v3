import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { LakeFormationClientConfig } from "./LakeFormationClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: LakeFormationClientConfig) => ({
  apiVersion: "2017-03-31",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "LakeFormation"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
