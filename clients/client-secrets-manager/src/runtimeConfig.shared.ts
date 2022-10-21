// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { SecretsManagerClientConfig } from "./SecretsManagerClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SecretsManagerClientConfig) => ({
  apiVersion: "2017-10-17",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Secrets Manager",
  urlParser: config?.urlParser ?? parseUrl,
});
