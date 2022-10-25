// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { MediaTailorClientConfig } from "./MediaTailorClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MediaTailorClientConfig) => ({
  apiVersion: "2018-04-23",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "MediaTailor",
  urlParser: config?.urlParser ?? parseUrl,
});
