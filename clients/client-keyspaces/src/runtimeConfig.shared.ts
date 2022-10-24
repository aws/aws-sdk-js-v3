// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { KeyspacesClientConfig } from "./KeyspacesClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: KeyspacesClientConfig) => ({
  apiVersion: "2022-02-10",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Keyspaces",
  urlParser: config?.urlParser ?? parseUrl,
});
