// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { ApplicationAutoScalingClientConfig } from "./ApplicationAutoScalingClient";
import { defaultEndpointResolver } from "./endpoint/endpointResolver";

/**
 * @internal
 */
export const getRuntimeConfig = (config: ApplicationAutoScalingClientConfig) => ({
  apiVersion: "2016-02-06",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Application Auto Scaling",
  urlParser: config?.urlParser ?? parseUrl,
});
