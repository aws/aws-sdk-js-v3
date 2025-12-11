// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListApplicationComponentsCommand,
  ListApplicationComponentsCommandInput,
  ListApplicationComponentsCommandOutput,
} from "../commands/ListApplicationComponentsCommand";
import { MigrationHubStrategyClient } from "../MigrationHubStrategyClient";
import { MigrationHubStrategyPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListApplicationComponents: (
  config: MigrationHubStrategyPaginationConfiguration,
  input: ListApplicationComponentsCommandInput,
  ...rest: any[]
) => Paginator<ListApplicationComponentsCommandOutput> = createPaginator<
  MigrationHubStrategyPaginationConfiguration,
  ListApplicationComponentsCommandInput,
  ListApplicationComponentsCommandOutput
>(MigrationHubStrategyClient, ListApplicationComponentsCommand, "nextToken", "nextToken", "maxResults");
