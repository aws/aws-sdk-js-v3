// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCostAllocationTagsCommand,
  ListCostAllocationTagsCommandInput,
  ListCostAllocationTagsCommandOutput,
} from "../commands/ListCostAllocationTagsCommand";
import { CostExplorerClient } from "../CostExplorerClient";
import { CostExplorerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCostAllocationTags: (
  config: CostExplorerPaginationConfiguration,
  input: ListCostAllocationTagsCommandInput,
  ...rest: any[]
) => Paginator<ListCostAllocationTagsCommandOutput> = createPaginator<
  CostExplorerPaginationConfiguration,
  ListCostAllocationTagsCommandInput,
  ListCostAllocationTagsCommandOutput
>(CostExplorerClient, ListCostAllocationTagsCommand, "NextToken", "NextToken", "MaxResults");
