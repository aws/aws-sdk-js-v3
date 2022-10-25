// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { ApiGatewayV2ClientConfig } from "./ApiGatewayV2Client";
import { defaultEndpointResolver } from "./endpoint/endpointResolver";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ApiGatewayV2ClientConfig) => ({
  apiVersion: "2018-11-29",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "ApiGatewayV2",
  urlParser: config?.urlParser ?? parseUrl,
});
