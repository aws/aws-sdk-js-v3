// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCollectorsCommand,
  ListCollectorsCommandInput,
  ListCollectorsCommandOutput,
} from "../commands/ListCollectorsCommand";
import { MigrationHubStrategyClient } from "../MigrationHubStrategyClient";
import { MigrationHubStrategyPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCollectors: (
  config: MigrationHubStrategyPaginationConfiguration,
  input: ListCollectorsCommandInput,
  ...rest: any[]
) => Paginator<ListCollectorsCommandOutput> = createPaginator<
  MigrationHubStrategyPaginationConfiguration,
  ListCollectorsCommandInput,
  ListCollectorsCommandOutput
>(MigrationHubStrategyClient, ListCollectorsCommand, "nextToken", "nextToken", "maxResults");
