// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { IdentitystoreClientConfig } from "./IdentitystoreClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IdentitystoreClientConfig) => ({
  apiVersion: "2020-06-15",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "identitystore",
  urlParser: config?.urlParser ?? parseUrl,
});
