// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentCoreControlClient } from "../BedrockAgentCoreControlClient";
import {
  ListConfigurationBundlesCommand,
  ListConfigurationBundlesCommandInput,
  ListConfigurationBundlesCommandOutput,
} from "../commands/ListConfigurationBundlesCommand";
import type { BedrockAgentCoreControlPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListConfigurationBundles: (
  config: BedrockAgentCoreControlPaginationConfiguration,
  input: ListConfigurationBundlesCommandInput,
  ...rest: any[]
) => Paginator<ListConfigurationBundlesCommandOutput> = createPaginator<
  BedrockAgentCoreControlPaginationConfiguration,
  ListConfigurationBundlesCommandInput,
  ListConfigurationBundlesCommandOutput
>(BedrockAgentCoreControlClient, ListConfigurationBundlesCommand, "nextToken", "nextToken", "maxResults");
