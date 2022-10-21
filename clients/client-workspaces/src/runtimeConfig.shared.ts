// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { WorkSpacesClientConfig } from "./WorkSpacesClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: WorkSpacesClientConfig) => ({
  apiVersion: "2015-04-08",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "WorkSpaces",
  urlParser: config?.urlParser ?? parseUrl,
});
