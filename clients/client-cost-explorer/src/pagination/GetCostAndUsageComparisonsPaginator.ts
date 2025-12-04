// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetCostAndUsageComparisonsCommand,
  GetCostAndUsageComparisonsCommandInput,
  GetCostAndUsageComparisonsCommandOutput,
} from "../commands/GetCostAndUsageComparisonsCommand";
import { CostExplorerClient } from "../CostExplorerClient";
import { CostExplorerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetCostAndUsageComparisons: (
  config: CostExplorerPaginationConfiguration,
  input: GetCostAndUsageComparisonsCommandInput,
  ...rest: any[]
) => Paginator<GetCostAndUsageComparisonsCommandOutput> = createPaginator<
  CostExplorerPaginationConfiguration,
  GetCostAndUsageComparisonsCommandInput,
  GetCostAndUsageComparisonsCommandOutput
>(CostExplorerClient, GetCostAndUsageComparisonsCommand, "NextPageToken", "NextPageToken", "MaxResults");
