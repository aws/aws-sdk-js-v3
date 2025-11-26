// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAnalyzableServersCommand,
  ListAnalyzableServersCommandInput,
  ListAnalyzableServersCommandOutput,
} from "../commands/ListAnalyzableServersCommand";
import { MigrationHubStrategyClient } from "../MigrationHubStrategyClient";
import { MigrationHubStrategyPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAnalyzableServers: (
  config: MigrationHubStrategyPaginationConfiguration,
  input: ListAnalyzableServersCommandInput,
  ...rest: any[]
) => Paginator<ListAnalyzableServersCommandOutput> = createPaginator<
  MigrationHubStrategyPaginationConfiguration,
  ListAnalyzableServersCommandInput,
  ListAnalyzableServersCommandOutput
>(MigrationHubStrategyClient, ListAnalyzableServersCommand, "nextToken", "nextToken", "maxResults");
