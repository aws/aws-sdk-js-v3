// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListWorkerBlocksCommand,
  ListWorkerBlocksCommandInput,
  ListWorkerBlocksCommandOutput,
} from "../commands/ListWorkerBlocksCommand";
import { MTurkClient } from "../MTurkClient";
import { MTurkPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListWorkerBlocks: (
  config: MTurkPaginationConfiguration,
  input: ListWorkerBlocksCommandInput,
  ...rest: any[]
) => Paginator<ListWorkerBlocksCommandOutput> = createPaginator<
  MTurkPaginationConfiguration,
  ListWorkerBlocksCommandInput,
  ListWorkerBlocksCommandOutput
>(MTurkClient, ListWorkerBlocksCommand, "NextToken", "NextToken", "MaxResults");
