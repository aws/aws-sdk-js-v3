// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { RekognitionClientConfig } from "./RekognitionClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: RekognitionClientConfig) => ({
  apiVersion: "2016-06-27",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Rekognition",
  urlParser: config?.urlParser ?? parseUrl,
});
