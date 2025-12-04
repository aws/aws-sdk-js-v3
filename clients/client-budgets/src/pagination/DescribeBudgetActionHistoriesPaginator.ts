// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BudgetsClient } from "../BudgetsClient";
import {
  DescribeBudgetActionHistoriesCommand,
  DescribeBudgetActionHistoriesCommandInput,
  DescribeBudgetActionHistoriesCommandOutput,
} from "../commands/DescribeBudgetActionHistoriesCommand";
import { BudgetsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeBudgetActionHistories: (
  config: BudgetsPaginationConfiguration,
  input: DescribeBudgetActionHistoriesCommandInput,
  ...rest: any[]
) => Paginator<DescribeBudgetActionHistoriesCommandOutput> = createPaginator<
  BudgetsPaginationConfiguration,
  DescribeBudgetActionHistoriesCommandInput,
  DescribeBudgetActionHistoriesCommandOutput
>(BudgetsClient, DescribeBudgetActionHistoriesCommand, "NextToken", "NextToken", "MaxResults");
