// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { OpsWorksClientConfig } from "./OpsWorksClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: OpsWorksClientConfig) => ({
  apiVersion: "2013-02-18",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "OpsWorks",
  urlParser: config?.urlParser ?? parseUrl,
});
