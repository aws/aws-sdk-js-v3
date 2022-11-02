// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { fromBase64, toBase64 } from "@aws-sdk/util-base64";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { PersonalizeRuntimeClientConfig } from "./PersonalizeRuntimeClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: PersonalizeRuntimeClientConfig) => ({
  apiVersion: "2018-05-22",
  base64Decoder: config?.base64Decoder ?? fromBase64,
  base64Encoder: config?.base64Encoder ?? toBase64,
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Personalize Runtime",
  urlParser: config?.urlParser ?? parseUrl,
});
