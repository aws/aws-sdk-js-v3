// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListMigrationTaskUpdatesCommand,
  ListMigrationTaskUpdatesCommandInput,
  ListMigrationTaskUpdatesCommandOutput,
} from "../commands/ListMigrationTaskUpdatesCommand";
import { MigrationHubClient } from "../MigrationHubClient";
import { MigrationHubPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMigrationTaskUpdates: (
  config: MigrationHubPaginationConfiguration,
  input: ListMigrationTaskUpdatesCommandInput,
  ...rest: any[]
) => Paginator<ListMigrationTaskUpdatesCommandOutput> = createPaginator<
  MigrationHubPaginationConfiguration,
  ListMigrationTaskUpdatesCommandInput,
  ListMigrationTaskUpdatesCommandOutput
>(MigrationHubClient, ListMigrationTaskUpdatesCommand, "NextToken", "NextToken", "MaxResults");
