// smithy-typescript generated code
import { NoOpLogger } from "@aws-sdk/smithy-client";
import { parseUrl } from "@aws-sdk/url-parser";
import { fromBase64, toBase64 } from "@aws-sdk/util-base64";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { SimSpaceWeaverClientConfig } from "./SimSpaceWeaverClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: SimSpaceWeaverClientConfig) => ({
  apiVersion: "2022-10-28",
  base64Decoder: config?.base64Decoder ?? fromBase64,
  base64Encoder: config?.base64Encoder ?? toBase64,
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? new NoOpLogger(),
  serviceId: config?.serviceId ?? "SimSpaceWeaver",
  urlParser: config?.urlParser ?? parseUrl,
});
