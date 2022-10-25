// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { SSOClientConfig } from "./SSOClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SSOClientConfig) => ({
  apiVersion: "2019-06-10",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "SSO",
  urlParser: config?.urlParser ?? parseUrl,
});
