import { defaultRegionInfoProvider } from "./endpoints";
import { nullishCoalescing as coalesce } from "@aws-sdk/smithy-client";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { APIGatewayClientConfig } from "./APIGatewayClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: APIGatewayClientConfig) => ({
  apiVersion: "2015-07-09",
  disableHostPrefix: coalesce(config.disableHostPrefix, false),
  logger: coalesce(config.logger, {} as __Logger),
  regionInfoProvider: coalesce(config.regionInfoProvider, defaultRegionInfoProvider),
  serviceId: coalesce(config.serviceId, "API Gateway"),
  urlParser: coalesce(config.urlParser, parseUrl),
});
