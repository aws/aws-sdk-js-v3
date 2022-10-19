// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { SupportAppClientConfig } from "./SupportAppClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SupportAppClientConfig) => ({
  apiVersion: "2021-08-20",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Support App",
  urlParser: config?.urlParser ?? parseUrl,
});
