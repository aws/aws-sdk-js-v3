// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { WorkSpacesWebClientConfig } from "./WorkSpacesWebClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: WorkSpacesWebClientConfig) => ({
  apiVersion: "2020-07-08",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "WorkSpaces Web",
  urlParser: config?.urlParser ?? parseUrl,
});
