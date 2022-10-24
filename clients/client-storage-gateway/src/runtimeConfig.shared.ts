// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { StorageGatewayClientConfig } from "./StorageGatewayClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: StorageGatewayClientConfig) => ({
  apiVersion: "2013-06-30",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Storage Gateway",
  urlParser: config?.urlParser ?? parseUrl,
});
