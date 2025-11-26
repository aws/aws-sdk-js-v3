// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetSavingsPlansCoverageCommand,
  GetSavingsPlansCoverageCommandInput,
  GetSavingsPlansCoverageCommandOutput,
} from "../commands/GetSavingsPlansCoverageCommand";
import { CostExplorerClient } from "../CostExplorerClient";
import { CostExplorerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetSavingsPlansCoverage: (
  config: CostExplorerPaginationConfiguration,
  input: GetSavingsPlansCoverageCommandInput,
  ...rest: any[]
) => Paginator<GetSavingsPlansCoverageCommandOutput> = createPaginator<
  CostExplorerPaginationConfiguration,
  GetSavingsPlansCoverageCommandInput,
  GetSavingsPlansCoverageCommandOutput
>(CostExplorerClient, GetSavingsPlansCoverageCommand, "NextToken", "NextToken", "MaxResults");
