// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { S3OutpostsClientConfig } from "./S3OutpostsClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: S3OutpostsClientConfig) => ({
  apiVersion: "2017-07-25",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "S3Outposts",
  urlParser: config?.urlParser ?? parseUrl,
});
