// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { SSOAdminClientConfig } from "./SSOAdminClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SSOAdminClientConfig) => ({
  apiVersion: "2020-07-20",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "SSO Admin",
  urlParser: config?.urlParser ?? parseUrl,
});
