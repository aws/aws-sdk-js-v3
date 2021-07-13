import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { CodeDeployClientConfig } from "./CodeDeployClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: CodeDeployClientConfig) => ({
  apiVersion: "2014-10-06",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "CodeDeploy"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
