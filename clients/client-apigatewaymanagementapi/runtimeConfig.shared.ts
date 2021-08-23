import { defaultRegionInfoProvider } from "./endpoints";
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { ApiGatewayManagementApiClientConfig } from "./ApiGatewayManagementApiClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ApiGatewayManagementApiClientConfig) => ({
  apiVersion: "2018-11-29",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "ApiGatewayManagementApi",
  urlParser: config?.urlParser ?? parseUrl,
});
