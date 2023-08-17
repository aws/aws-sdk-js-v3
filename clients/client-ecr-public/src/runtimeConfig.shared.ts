// smithy-typescript generated code
import { NoOpLogger } from "@smithy/smithy-client";
import { parseUrl } from "@smithy/url-parser";
import { fromBase64, toBase64 } from "@smithy/util-base64";
import { fromUtf8, toUtf8 } from "@smithy/util-utf8";

import { ECRPUBLICClientConfig } from "./ECRPUBLICClient";
import { defaultEndpointResolver } from "./endpoint/endpointResolver";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ECRPUBLICClientConfig) => ({
  apiVersion: "2020-10-30",
  base64Decoder: config?.base64Decoder ?? fromBase64,
  base64Encoder: config?.base64Encoder ?? toBase64,
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  extensions: config?.extensions ?? [],
  logger: config?.logger ?? new NoOpLogger(),
  serviceId: config?.serviceId ?? "ECR PUBLIC",
  urlParser: config?.urlParser ?? parseUrl,
  utf8Decoder: config?.utf8Decoder ?? fromUtf8,
  utf8Encoder: config?.utf8Encoder ?? toUtf8,
});
