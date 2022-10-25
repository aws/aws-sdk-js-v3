// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { ChimeSDKMeetingsClientConfig } from "./ChimeSDKMeetingsClient";
import { defaultEndpointResolver } from "./endpoint/endpointResolver";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ChimeSDKMeetingsClientConfig) => ({
  apiVersion: "2021-07-15",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Chime SDK Meetings",
  urlParser: config?.urlParser ?? parseUrl,
});
