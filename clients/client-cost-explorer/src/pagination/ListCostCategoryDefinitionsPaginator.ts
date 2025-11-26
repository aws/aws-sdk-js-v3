// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCostCategoryDefinitionsCommand,
  ListCostCategoryDefinitionsCommandInput,
  ListCostCategoryDefinitionsCommandOutput,
} from "../commands/ListCostCategoryDefinitionsCommand";
import { CostExplorerClient } from "../CostExplorerClient";
import { CostExplorerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCostCategoryDefinitions: (
  config: CostExplorerPaginationConfiguration,
  input: ListCostCategoryDefinitionsCommandInput,
  ...rest: any[]
) => Paginator<ListCostCategoryDefinitionsCommandOutput> = createPaginator<
  CostExplorerPaginationConfiguration,
  ListCostCategoryDefinitionsCommandInput,
  ListCostCategoryDefinitionsCommandOutput
>(CostExplorerClient, ListCostCategoryDefinitionsCommand, "NextToken", "NextToken", "MaxResults");
