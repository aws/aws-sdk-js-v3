import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { CodeBuildClientConfig } from "./CodeBuildClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CodeBuildClientConfig) => ({
  apiVersion: "2016-10-06",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "CodeBuild"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
