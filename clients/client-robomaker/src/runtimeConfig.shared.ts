// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { RoboMakerClientConfig } from "./RoboMakerClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: RoboMakerClientConfig) => ({
  apiVersion: "2018-06-29",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "RoboMaker",
  urlParser: config?.urlParser ?? parseUrl,
});
