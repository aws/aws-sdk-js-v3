import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { APIGatewayClientConfig } from "./APIGatewayClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: APIGatewayClientConfig) => ({
  apiVersion: "2015-07-09",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "API Gateway",
  urlParser: config?.urlParser ?? parseUrl,
});
