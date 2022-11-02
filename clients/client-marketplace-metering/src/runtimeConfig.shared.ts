// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { fromBase64, toBase64 } from "@aws-sdk/util-base64";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { MarketplaceMeteringClientConfig } from "./MarketplaceMeteringClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MarketplaceMeteringClientConfig) => ({
  apiVersion: "2016-01-14",
  base64Decoder: config?.base64Decoder ?? fromBase64,
  base64Encoder: config?.base64Encoder ?? toBase64,
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Marketplace Metering",
  urlParser: config?.urlParser ?? parseUrl,
});
