// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { ServerlessApplicationRepositoryClientConfig } from "./ServerlessApplicationRepositoryClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ServerlessApplicationRepositoryClientConfig) => ({
  apiVersion: "2017-09-08",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "ServerlessApplicationRepository",
  urlParser: config?.urlParser ?? parseUrl,
});
