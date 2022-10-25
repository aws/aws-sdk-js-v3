// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { MediaConvertClientConfig } from "./MediaConvertClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MediaConvertClientConfig) => ({
  apiVersion: "2017-08-29",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "MediaConvert",
  urlParser: config?.urlParser ?? parseUrl,
});
