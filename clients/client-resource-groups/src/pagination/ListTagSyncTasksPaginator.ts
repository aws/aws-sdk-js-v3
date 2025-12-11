// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTagSyncTasksCommand,
  ListTagSyncTasksCommandInput,
  ListTagSyncTasksCommandOutput,
} from "../commands/ListTagSyncTasksCommand";
import { ResourceGroupsClient } from "../ResourceGroupsClient";
import { ResourceGroupsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTagSyncTasks: (
  config: ResourceGroupsPaginationConfiguration,
  input: ListTagSyncTasksCommandInput,
  ...rest: any[]
) => Paginator<ListTagSyncTasksCommandOutput> = createPaginator<
  ResourceGroupsPaginationConfiguration,
  ListTagSyncTasksCommandInput,
  ListTagSyncTasksCommandOutput
>(ResourceGroupsClient, ListTagSyncTasksCommand, "NextToken", "NextToken", "MaxResults");
