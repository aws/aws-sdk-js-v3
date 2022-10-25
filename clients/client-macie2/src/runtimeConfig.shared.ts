// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { Macie2ClientConfig } from "./Macie2Client";

/**
 * @internal
 */
export const getRuntimeConfig = (config: Macie2ClientConfig) => ({
  apiVersion: "2020-01-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Macie2",
  urlParser: config?.urlParser ?? parseUrl,
});
