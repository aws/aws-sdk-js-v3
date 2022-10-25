// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { ChimeSDKMediaPipelinesClientConfig } from "./ChimeSDKMediaPipelinesClient";
import { defaultEndpointResolver } from "./endpoint/endpointResolver";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ChimeSDKMediaPipelinesClientConfig) => ({
  apiVersion: "2021-07-15",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Chime SDK Media Pipelines",
  urlParser: config?.urlParser ?? parseUrl,
});
