// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BudgetsClient } from "../BudgetsClient";
import {
  DescribeNotificationsForBudgetCommand,
  DescribeNotificationsForBudgetCommandInput,
  DescribeNotificationsForBudgetCommandOutput,
} from "../commands/DescribeNotificationsForBudgetCommand";
import { BudgetsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeNotificationsForBudget: (
  config: BudgetsPaginationConfiguration,
  input: DescribeNotificationsForBudgetCommandInput,
  ...rest: any[]
) => Paginator<DescribeNotificationsForBudgetCommandOutput> = createPaginator<
  BudgetsPaginationConfiguration,
  DescribeNotificationsForBudgetCommandInput,
  DescribeNotificationsForBudgetCommandOutput
>(BudgetsClient, DescribeNotificationsForBudgetCommand, "NextToken", "NextToken", "MaxResults");
