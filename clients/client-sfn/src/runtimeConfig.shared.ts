// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { SFNClientConfig } from "./SFNClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SFNClientConfig) => ({
  apiVersion: "2016-11-23",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "SFN",
  urlParser: config?.urlParser ?? parseUrl,
});
