// smithy-typescript generated code
import { NoOpLogger } from "@aws-sdk/smithy-client";
import { parseUrl } from "@aws-sdk/url-parser";
import { fromBase64, toBase64 } from "@aws-sdk/util-base64";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { KinesisVideoSignalingClientConfig } from "./KinesisVideoSignalingClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: KinesisVideoSignalingClientConfig) => ({
  apiVersion: "2019-12-04",
  base64Decoder: config?.base64Decoder ?? fromBase64,
  base64Encoder: config?.base64Encoder ?? toBase64,
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? new NoOpLogger(),
  serviceId: config?.serviceId ?? "Kinesis Video Signaling",
  urlParser: config?.urlParser ?? parseUrl,
});
