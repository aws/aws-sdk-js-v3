// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BudgetsClient } from "../BudgetsClient";
import {
  DescribeSubscribersForNotificationCommand,
  DescribeSubscribersForNotificationCommandInput,
  DescribeSubscribersForNotificationCommandOutput,
} from "../commands/DescribeSubscribersForNotificationCommand";
import { BudgetsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeSubscribersForNotification: (
  config: BudgetsPaginationConfiguration,
  input: DescribeSubscribersForNotificationCommandInput,
  ...rest: any[]
) => Paginator<DescribeSubscribersForNotificationCommandOutput> = createPaginator<
  BudgetsPaginationConfiguration,
  DescribeSubscribersForNotificationCommandInput,
  DescribeSubscribersForNotificationCommandOutput
>(BudgetsClient, DescribeSubscribersForNotificationCommand, "NextToken", "NextToken", "MaxResults");
