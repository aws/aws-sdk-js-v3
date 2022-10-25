// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { SignerClientConfig } from "./SignerClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SignerClientConfig) => ({
  apiVersion: "2017-08-25",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "signer",
  urlParser: config?.urlParser ?? parseUrl,
});
