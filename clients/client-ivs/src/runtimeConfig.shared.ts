// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { IvsClientConfig } from "./IvsClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: IvsClientConfig) => ({
  apiVersion: "2020-07-14",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "ivs",
  urlParser: config?.urlParser ?? parseUrl,
});
