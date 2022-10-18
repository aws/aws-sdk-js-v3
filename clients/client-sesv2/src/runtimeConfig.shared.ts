// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { SESv2ClientConfig } from "./SESv2Client";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SESv2ClientConfig) => ({
  apiVersion: "2019-09-27",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "SESv2",
  urlParser: config?.urlParser ?? parseUrl,
});
