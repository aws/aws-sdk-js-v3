// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListServersCommand, ListServersCommandInput, ListServersCommandOutput } from "../commands/ListServersCommand";
import { MigrationHubStrategyClient } from "../MigrationHubStrategyClient";
import { MigrationHubStrategyPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListServers: (
  config: MigrationHubStrategyPaginationConfiguration,
  input: ListServersCommandInput,
  ...rest: any[]
) => Paginator<ListServersCommandOutput> = createPaginator<
  MigrationHubStrategyPaginationConfiguration,
  ListServersCommandInput,
  ListServersCommandOutput
>(MigrationHubStrategyClient, ListServersCommand, "nextToken", "nextToken", "maxResults");
