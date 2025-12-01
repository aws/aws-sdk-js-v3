// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListBatchJobDefinitionsCommand,
  ListBatchJobDefinitionsCommandInput,
  ListBatchJobDefinitionsCommandOutput,
} from "../commands/ListBatchJobDefinitionsCommand";
import { M2Client } from "../M2Client";
import { M2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBatchJobDefinitions: (
  config: M2PaginationConfiguration,
  input: ListBatchJobDefinitionsCommandInput,
  ...rest: any[]
) => Paginator<ListBatchJobDefinitionsCommandOutput> = createPaginator<
  M2PaginationConfiguration,
  ListBatchJobDefinitionsCommandInput,
  ListBatchJobDefinitionsCommandOutput
>(M2Client, ListBatchJobDefinitionsCommand, "nextToken", "nextToken", "maxResults");
