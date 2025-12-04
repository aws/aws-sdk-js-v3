// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTaskExecutionsCommand,
  ListTaskExecutionsCommandInput,
  ListTaskExecutionsCommandOutput,
} from "../commands/ListTaskExecutionsCommand";
import { DataSyncClient } from "../DataSyncClient";
import { DataSyncPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTaskExecutions: (
  config: DataSyncPaginationConfiguration,
  input: ListTaskExecutionsCommandInput,
  ...rest: any[]
) => Paginator<ListTaskExecutionsCommandOutput> = createPaginator<
  DataSyncPaginationConfiguration,
  ListTaskExecutionsCommandInput,
  ListTaskExecutionsCommandOutput
>(DataSyncClient, ListTaskExecutionsCommand, "NextToken", "NextToken", "MaxResults");
