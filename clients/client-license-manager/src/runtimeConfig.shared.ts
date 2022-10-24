// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { LicenseManagerClientConfig } from "./LicenseManagerClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: LicenseManagerClientConfig) => ({
  apiVersion: "2018-08-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "License Manager",
  urlParser: config?.urlParser ?? parseUrl,
});
