// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { GameLiftClientConfig } from "./GameLiftClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: GameLiftClientConfig) => ({
  apiVersion: "2015-10-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "GameLift",
  urlParser: config?.urlParser ?? parseUrl,
});
