// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { EC2ClientConfig } from "./EC2Client";
import { defaultEndpointResolver } from "./endpoint/endpointResolver";

/**
 * @internal
 */
export const getRuntimeConfig = (config: EC2ClientConfig) => ({
  apiVersion: "2016-11-15",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "EC2",
  urlParser: config?.urlParser ?? parseUrl,
});
