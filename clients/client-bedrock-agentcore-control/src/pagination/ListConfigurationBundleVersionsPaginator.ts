// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentCoreControlClient } from "../BedrockAgentCoreControlClient";
import {
  ListConfigurationBundleVersionsCommand,
  ListConfigurationBundleVersionsCommandInput,
  ListConfigurationBundleVersionsCommandOutput,
} from "../commands/ListConfigurationBundleVersionsCommand";
import type { BedrockAgentCoreControlPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListConfigurationBundleVersions: (
  config: BedrockAgentCoreControlPaginationConfiguration,
  input: ListConfigurationBundleVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListConfigurationBundleVersionsCommandOutput> = createPaginator<
  BedrockAgentCoreControlPaginationConfiguration,
  ListConfigurationBundleVersionsCommandInput,
  ListConfigurationBundleVersionsCommandOutput
>(BedrockAgentCoreControlClient, ListConfigurationBundleVersionsCommand, "nextToken", "nextToken", "maxResults");
