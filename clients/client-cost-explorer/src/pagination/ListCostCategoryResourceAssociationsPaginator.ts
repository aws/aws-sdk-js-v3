// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCostCategoryResourceAssociationsCommand,
  ListCostCategoryResourceAssociationsCommandInput,
  ListCostCategoryResourceAssociationsCommandOutput,
} from "../commands/ListCostCategoryResourceAssociationsCommand";
import { CostExplorerClient } from "../CostExplorerClient";
import { CostExplorerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCostCategoryResourceAssociations: (
  config: CostExplorerPaginationConfiguration,
  input: ListCostCategoryResourceAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListCostCategoryResourceAssociationsCommandOutput> = createPaginator<
  CostExplorerPaginationConfiguration,
  ListCostCategoryResourceAssociationsCommandInput,
  ListCostCategoryResourceAssociationsCommandOutput
>(CostExplorerClient, ListCostCategoryResourceAssociationsCommand, "NextToken", "NextToken", "MaxResults");
