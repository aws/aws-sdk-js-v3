// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ApplicationAutoScalingClient } from "../ApplicationAutoScalingClient";
import {
  DescribeScheduledActionsCommand,
  DescribeScheduledActionsCommandInput,
  DescribeScheduledActionsCommandOutput,
} from "../commands/DescribeScheduledActionsCommand";
import { ApplicationAutoScalingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeScheduledActions: (
  config: ApplicationAutoScalingPaginationConfiguration,
  input: DescribeScheduledActionsCommandInput,
  ...rest: any[]
) => Paginator<DescribeScheduledActionsCommandOutput> = createPaginator<
  ApplicationAutoScalingPaginationConfiguration,
  DescribeScheduledActionsCommandInput,
  DescribeScheduledActionsCommandOutput
>(ApplicationAutoScalingClient, DescribeScheduledActionsCommand, "NextToken", "NextToken", "MaxResults");
