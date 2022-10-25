// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { RbinClientConfig } from "./RbinClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: RbinClientConfig) => ({
  apiVersion: "2021-06-15",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "rbin",
  urlParser: config?.urlParser ?? parseUrl,
});
