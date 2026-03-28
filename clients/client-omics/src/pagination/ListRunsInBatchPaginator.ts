// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRunsInBatchCommand,
  ListRunsInBatchCommandInput,
  ListRunsInBatchCommandOutput,
} from "../commands/ListRunsInBatchCommand";
import { OmicsClient } from "../OmicsClient";
import type { OmicsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRunsInBatch: (
  config: OmicsPaginationConfiguration,
  input: ListRunsInBatchCommandInput,
  ...rest: any[]
) => Paginator<ListRunsInBatchCommandOutput> = createPaginator<
  OmicsPaginationConfiguration,
  ListRunsInBatchCommandInput,
  ListRunsInBatchCommandOutput
>(OmicsClient, ListRunsInBatchCommand, "startingToken", "nextToken", "maxItems");
