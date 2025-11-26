// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BudgetsClient } from "../BudgetsClient";
import {
  DescribeBudgetActionsForAccountCommand,
  DescribeBudgetActionsForAccountCommandInput,
  DescribeBudgetActionsForAccountCommandOutput,
} from "../commands/DescribeBudgetActionsForAccountCommand";
import { BudgetsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeBudgetActionsForAccount: (
  config: BudgetsPaginationConfiguration,
  input: DescribeBudgetActionsForAccountCommandInput,
  ...rest: any[]
) => Paginator<DescribeBudgetActionsForAccountCommandOutput> = createPaginator<
  BudgetsPaginationConfiguration,
  DescribeBudgetActionsForAccountCommandInput,
  DescribeBudgetActionsForAccountCommandOutput
>(BudgetsClient, DescribeBudgetActionsForAccountCommand, "NextToken", "NextToken", "MaxResults");
