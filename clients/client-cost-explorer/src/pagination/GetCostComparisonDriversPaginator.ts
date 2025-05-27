// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  GetCostComparisonDriversCommand,
  GetCostComparisonDriversCommandInput,
  GetCostComparisonDriversCommandOutput,
} from "../commands/GetCostComparisonDriversCommand";
import { CostExplorerClient } from "../CostExplorerClient";
import { CostExplorerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetCostComparisonDrivers: (
  config: CostExplorerPaginationConfiguration,
  input: GetCostComparisonDriversCommandInput,
  ...rest: any[]
) => Paginator<GetCostComparisonDriversCommandOutput> = createPaginator<
  CostExplorerPaginationConfiguration,
  GetCostComparisonDriversCommandInput,
  GetCostComparisonDriversCommandOutput
>(CostExplorerClient, GetCostComparisonDriversCommand, "NextPageToken", "NextPageToken", "MaxResults");
