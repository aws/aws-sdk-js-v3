import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { ApiGatewayManagementApiClientConfig } from "./ApiGatewayManagementApiClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ApiGatewayManagementApiClientConfig) => ({
  apiVersion: "2018-11-29",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "ApiGatewayManagementApi"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
