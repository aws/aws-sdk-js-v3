// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BudgetsClient } from "../BudgetsClient";
import {
  DescribeBudgetNotificationsForAccountCommand,
  DescribeBudgetNotificationsForAccountCommandInput,
  DescribeBudgetNotificationsForAccountCommandOutput,
} from "../commands/DescribeBudgetNotificationsForAccountCommand";
import { BudgetsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeBudgetNotificationsForAccount: (
  config: BudgetsPaginationConfiguration,
  input: DescribeBudgetNotificationsForAccountCommandInput,
  ...rest: any[]
) => Paginator<DescribeBudgetNotificationsForAccountCommandOutput> = createPaginator<
  BudgetsPaginationConfiguration,
  DescribeBudgetNotificationsForAccountCommandInput,
  DescribeBudgetNotificationsForAccountCommandOutput
>(BudgetsClient, DescribeBudgetNotificationsForAccountCommand, "NextToken", "NextToken", "MaxResults");
