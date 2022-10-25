// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { KinesisVideoSignalingClientConfig } from "./KinesisVideoSignalingClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: KinesisVideoSignalingClientConfig) => ({
  apiVersion: "2019-12-04",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Kinesis Video Signaling",
  urlParser: config?.urlParser ?? parseUrl,
});
