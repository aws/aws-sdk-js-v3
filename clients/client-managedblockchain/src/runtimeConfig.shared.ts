// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { ManagedBlockchainClientConfig } from "./ManagedBlockchainClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ManagedBlockchainClientConfig) => ({
  apiVersion: "2018-09-24",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "ManagedBlockchain",
  urlParser: config?.urlParser ?? parseUrl,
});
