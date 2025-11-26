// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BudgetsClient } from "../BudgetsClient";
import {
  DescribeBudgetsCommand,
  DescribeBudgetsCommandInput,
  DescribeBudgetsCommandOutput,
} from "../commands/DescribeBudgetsCommand";
import { BudgetsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeBudgets: (
  config: BudgetsPaginationConfiguration,
  input: DescribeBudgetsCommandInput,
  ...rest: any[]
) => Paginator<DescribeBudgetsCommandOutput> = createPaginator<
  BudgetsPaginationConfiguration,
  DescribeBudgetsCommandInput,
  DescribeBudgetsCommandOutput
>(BudgetsClient, DescribeBudgetsCommand, "NextToken", "NextToken", "MaxResults");
