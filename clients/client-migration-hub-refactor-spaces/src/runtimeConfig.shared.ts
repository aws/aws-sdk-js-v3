// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultRegionInfoProvider } from "./endpoints";
import { MigrationHubRefactorSpacesClientConfig } from "./MigrationHubRefactorSpacesClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MigrationHubRefactorSpacesClientConfig) => ({
  apiVersion: "2021-10-26",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "Migration Hub Refactor Spaces",
  urlParser: config?.urlParser ?? parseUrl,
});
