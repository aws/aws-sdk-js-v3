// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { TransferClientConfig } from "./TransferClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: TransferClientConfig) => ({
  apiVersion: "2018-11-05",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Transfer",
  urlParser: config?.urlParser ?? parseUrl,
});
