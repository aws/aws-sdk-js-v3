// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListBatchLoadTasksCommand,
  ListBatchLoadTasksCommandInput,
  ListBatchLoadTasksCommandOutput,
} from "../commands/ListBatchLoadTasksCommand";
import { TimestreamWriteClient } from "../TimestreamWriteClient";
import { TimestreamWritePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBatchLoadTasks: (
  config: TimestreamWritePaginationConfiguration,
  input: ListBatchLoadTasksCommandInput,
  ...rest: any[]
) => Paginator<ListBatchLoadTasksCommandOutput> = createPaginator<
  TimestreamWritePaginationConfiguration,
  ListBatchLoadTasksCommandInput,
  ListBatchLoadTasksCommandOutput
>(TimestreamWriteClient, ListBatchLoadTasksCommand, "NextToken", "NextToken", "MaxResults");
