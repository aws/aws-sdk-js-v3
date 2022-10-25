// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { MediaLiveClientConfig } from "./MediaLiveClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MediaLiveClientConfig) => ({
  apiVersion: "2017-10-14",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "MediaLive",
  urlParser: config?.urlParser ?? parseUrl,
});
