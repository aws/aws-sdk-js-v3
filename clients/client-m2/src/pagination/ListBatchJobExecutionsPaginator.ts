// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListBatchJobExecutionsCommand,
  ListBatchJobExecutionsCommandInput,
  ListBatchJobExecutionsCommandOutput,
} from "../commands/ListBatchJobExecutionsCommand";
import { M2Client } from "../M2Client";
import { M2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBatchJobExecutions: (
  config: M2PaginationConfiguration,
  input: ListBatchJobExecutionsCommandInput,
  ...rest: any[]
) => Paginator<ListBatchJobExecutionsCommandOutput> = createPaginator<
  M2PaginationConfiguration,
  ListBatchJobExecutionsCommandInput,
  ListBatchJobExecutionsCommandOutput
>(M2Client, ListBatchJobExecutionsCommand, "nextToken", "nextToken", "maxResults");
