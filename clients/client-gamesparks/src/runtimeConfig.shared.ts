// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { GameSparksClientConfig } from "./GameSparksClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: GameSparksClientConfig) => ({
  apiVersion: "2021-08-17",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "GameSparks",
  urlParser: config?.urlParser ?? parseUrl,
});
