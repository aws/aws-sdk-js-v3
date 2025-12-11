// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListMigrationTasksCommand,
  ListMigrationTasksCommandInput,
  ListMigrationTasksCommandOutput,
} from "../commands/ListMigrationTasksCommand";
import { MigrationHubClient } from "../MigrationHubClient";
import { MigrationHubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMigrationTasks: (
  config: MigrationHubPaginationConfiguration,
  input: ListMigrationTasksCommandInput,
  ...rest: any[]
) => Paginator<ListMigrationTasksCommandOutput> = createPaginator<
  MigrationHubPaginationConfiguration,
  ListMigrationTasksCommandInput,
  ListMigrationTasksCommandOutput
>(MigrationHubClient, ListMigrationTasksCommand, "NextToken", "NextToken", "MaxResults");
