// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { LexModelBuildingServiceClientConfig } from "./LexModelBuildingServiceClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: LexModelBuildingServiceClientConfig) => ({
  apiVersion: "2017-04-19",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Lex Model Building Service",
  urlParser: config?.urlParser ?? parseUrl,
});
