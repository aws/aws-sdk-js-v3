// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { KinesisVideoMediaClientConfig } from "./KinesisVideoMediaClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: KinesisVideoMediaClientConfig) => ({
  apiVersion: "2017-09-30",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Kinesis Video Media",
  urlParser: config?.urlParser ?? parseUrl,
});
