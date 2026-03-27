// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListBatchCommand, ListBatchCommandInput, ListBatchCommandOutput } from "../commands/ListBatchCommand";
import { OmicsClient } from "../OmicsClient";
import type { OmicsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBatch: (
  config: OmicsPaginationConfiguration,
  input: ListBatchCommandInput,
  ...rest: any[]
) => Paginator<ListBatchCommandOutput> = createPaginator<
  OmicsPaginationConfiguration,
  ListBatchCommandInput,
  ListBatchCommandOutput
>(OmicsClient, ListBatchCommand, "startingToken", "nextToken", "maxItems");
