// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultRegionInfoProvider } from "./endpoints";
import { MigrationHubOrchestratorClientConfig } from "./MigrationHubOrchestratorClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: MigrationHubOrchestratorClientConfig) => ({
  apiVersion: "2021-08-28",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  logger: config?.logger ?? ({} as __Logger),
  regionInfoProvider: config?.regionInfoProvider ?? defaultRegionInfoProvider,
  serviceId: config?.serviceId ?? "MigrationHubOrchestrator",
  urlParser: config?.urlParser ?? parseUrl,
});
