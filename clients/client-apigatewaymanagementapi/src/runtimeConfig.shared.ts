// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { ApiGatewayManagementApiClientConfig } from "./ApiGatewayManagementApiClient";
import { defaultEndpointResolver } from "./endpoint/endpointResolver";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ApiGatewayManagementApiClientConfig) => ({
  apiVersion: "2018-11-29",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "ApiGatewayManagementApi",
  urlParser: config?.urlParser ?? parseUrl,
});
