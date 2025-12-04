// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BudgetsClient } from "../BudgetsClient";
import {
  DescribeBudgetPerformanceHistoryCommand,
  DescribeBudgetPerformanceHistoryCommandInput,
  DescribeBudgetPerformanceHistoryCommandOutput,
} from "../commands/DescribeBudgetPerformanceHistoryCommand";
import { BudgetsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeBudgetPerformanceHistory: (
  config: BudgetsPaginationConfiguration,
  input: DescribeBudgetPerformanceHistoryCommandInput,
  ...rest: any[]
) => Paginator<DescribeBudgetPerformanceHistoryCommandOutput> = createPaginator<
  BudgetsPaginationConfiguration,
  DescribeBudgetPerformanceHistoryCommandInput,
  DescribeBudgetPerformanceHistoryCommandOutput
>(BudgetsClient, DescribeBudgetPerformanceHistoryCommand, "NextToken", "NextToken", "MaxResults");
