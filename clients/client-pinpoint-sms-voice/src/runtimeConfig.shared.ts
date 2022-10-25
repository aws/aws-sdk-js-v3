// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { PinpointSMSVoiceClientConfig } from "./PinpointSMSVoiceClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: PinpointSMSVoiceClientConfig) => ({
  apiVersion: "2018-09-05",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Pinpoint SMS Voice",
  urlParser: config?.urlParser ?? parseUrl,
});
