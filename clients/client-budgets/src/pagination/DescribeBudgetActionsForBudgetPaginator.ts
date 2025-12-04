// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BudgetsClient } from "../BudgetsClient";
import {
  DescribeBudgetActionsForBudgetCommand,
  DescribeBudgetActionsForBudgetCommandInput,
  DescribeBudgetActionsForBudgetCommandOutput,
} from "../commands/DescribeBudgetActionsForBudgetCommand";
import { BudgetsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeBudgetActionsForBudget: (
  config: BudgetsPaginationConfiguration,
  input: DescribeBudgetActionsForBudgetCommandInput,
  ...rest: any[]
) => Paginator<DescribeBudgetActionsForBudgetCommandOutput> = createPaginator<
  BudgetsPaginationConfiguration,
  DescribeBudgetActionsForBudgetCommandInput,
  DescribeBudgetActionsForBudgetCommandOutput
>(BudgetsClient, DescribeBudgetActionsForBudgetCommand, "NextToken", "NextToken", "MaxResults");
