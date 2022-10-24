// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { SupportClientConfig } from "./SupportClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SupportClientConfig) => ({
  apiVersion: "2013-04-15",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Support",
  urlParser: config?.urlParser ?? parseUrl,
});
