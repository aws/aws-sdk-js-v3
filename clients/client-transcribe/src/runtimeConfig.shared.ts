// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { TranscribeClientConfig } from "./TranscribeClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: TranscribeClientConfig) => ({
  apiVersion: "2017-10-26",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Transcribe",
  urlParser: config?.urlParser ?? parseUrl,
});
