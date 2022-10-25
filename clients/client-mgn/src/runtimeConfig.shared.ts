// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { MgnClientConfig } from "./MgnClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MgnClientConfig) => ({
  apiVersion: "2020-02-26",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "mgn",
  urlParser: config?.urlParser ?? parseUrl,
});
