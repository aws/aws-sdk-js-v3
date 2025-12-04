// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListPluginsCommand, ListPluginsCommandInput, ListPluginsCommandOutput } from "../commands/ListPluginsCommand";
import { MigrationHubOrchestratorClient } from "../MigrationHubOrchestratorClient";
import { MigrationHubOrchestratorPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPlugins: (
  config: MigrationHubOrchestratorPaginationConfiguration,
  input: ListPluginsCommandInput,
  ...rest: any[]
) => Paginator<ListPluginsCommandOutput> = createPaginator<
  MigrationHubOrchestratorPaginationConfiguration,
  ListPluginsCommandInput,
  ListPluginsCommandOutput
>(MigrationHubOrchestratorClient, ListPluginsCommand, "nextToken", "nextToken", "maxResults");
