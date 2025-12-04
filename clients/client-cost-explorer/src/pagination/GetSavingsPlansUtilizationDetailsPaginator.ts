// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetSavingsPlansUtilizationDetailsCommand,
  GetSavingsPlansUtilizationDetailsCommandInput,
  GetSavingsPlansUtilizationDetailsCommandOutput,
} from "../commands/GetSavingsPlansUtilizationDetailsCommand";
import { CostExplorerClient } from "../CostExplorerClient";
import { CostExplorerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetSavingsPlansUtilizationDetails: (
  config: CostExplorerPaginationConfiguration,
  input: GetSavingsPlansUtilizationDetailsCommandInput,
  ...rest: any[]
) => Paginator<GetSavingsPlansUtilizationDetailsCommandOutput> = createPaginator<
  CostExplorerPaginationConfiguration,
  GetSavingsPlansUtilizationDetailsCommandInput,
  GetSavingsPlansUtilizationDetailsCommandOutput
>(CostExplorerClient, GetSavingsPlansUtilizationDetailsCommand, "NextToken", "NextToken", "MaxResults");
