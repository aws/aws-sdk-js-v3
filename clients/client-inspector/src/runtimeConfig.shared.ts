// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { InspectorClientConfig } from "./InspectorClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: InspectorClientConfig) => ({
  apiVersion: "2016-02-16",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Inspector",
  urlParser: config?.urlParser ?? parseUrl,
});
