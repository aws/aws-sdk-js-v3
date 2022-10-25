// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { MediaPackageVodClientConfig } from "./MediaPackageVodClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MediaPackageVodClientConfig) => ({
  apiVersion: "2018-11-07",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "MediaPackage Vod",
  urlParser: config?.urlParser ?? parseUrl,
});
