// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { PrivateNetworksClientConfig } from "./PrivateNetworksClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: PrivateNetworksClientConfig) => ({
  apiVersion: "2021-12-03",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "PrivateNetworks",
  urlParser: config?.urlParser ?? parseUrl,
});
