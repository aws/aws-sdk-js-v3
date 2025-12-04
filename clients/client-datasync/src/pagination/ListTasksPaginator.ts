// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListTasksCommand, ListTasksCommandInput, ListTasksCommandOutput } from "../commands/ListTasksCommand";
import { DataSyncClient } from "../DataSyncClient";
import { DataSyncPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTasks: (
  config: DataSyncPaginationConfiguration,
  input: ListTasksCommandInput,
  ...rest: any[]
) => Paginator<ListTasksCommandOutput> = createPaginator<
  DataSyncPaginationConfiguration,
  ListTasksCommandInput,
  ListTasksCommandOutput
>(DataSyncClient, ListTasksCommand, "NextToken", "NextToken", "MaxResults");
