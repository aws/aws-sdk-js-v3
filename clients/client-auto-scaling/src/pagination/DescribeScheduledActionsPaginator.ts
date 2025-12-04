// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AutoScalingClient } from "../AutoScalingClient";
import {
  DescribeScheduledActionsCommand,
  DescribeScheduledActionsCommandInput,
  DescribeScheduledActionsCommandOutput,
} from "../commands/DescribeScheduledActionsCommand";
import { AutoScalingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeScheduledActions: (
  config: AutoScalingPaginationConfiguration,
  input: DescribeScheduledActionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeScheduledActionsCommandOutput> = createPaginator<
  AutoScalingPaginationConfiguration,
  DescribeScheduledActionsCommandInput,
  DescribeScheduledActionsCommandOutput
>(AutoScalingClient, DescribeScheduledActionsCommand, "NextToken", "NextToken", "MaxRecords");
