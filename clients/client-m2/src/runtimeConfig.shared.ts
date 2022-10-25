// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { M2ClientConfig } from "./M2Client";

/**
 * @internal
 */
export const getRuntimeConfig = (config: M2ClientConfig) => ({
  apiVersion: "2021-04-28",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "m2",
  urlParser: config?.urlParser ?? parseUrl,
});
