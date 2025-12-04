// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCostAllocationTagBackfillHistoryCommand,
  ListCostAllocationTagBackfillHistoryCommandInput,
  ListCostAllocationTagBackfillHistoryCommandOutput,
} from "../commands/ListCostAllocationTagBackfillHistoryCommand";
import { CostExplorerClient } from "../CostExplorerClient";
import { CostExplorerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCostAllocationTagBackfillHistory: (
  config: CostExplorerPaginationConfiguration,
  input: ListCostAllocationTagBackfillHistoryCommandInput,
  ...rest: any[]
) => Paginator<ListCostAllocationTagBackfillHistoryCommandOutput> = createPaginator<
  CostExplorerPaginationConfiguration,
  ListCostAllocationTagBackfillHistoryCommandInput,
  ListCostAllocationTagBackfillHistoryCommandOutput
>(CostExplorerClient, ListCostAllocationTagBackfillHistoryCommand, "NextToken", "NextToken", "MaxResults");
