// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { MWAAClientConfig } from "./MWAAClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MWAAClientConfig) => ({
  apiVersion: "2020-07-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "MWAA",
  urlParser: config?.urlParser ?? parseUrl,
});
