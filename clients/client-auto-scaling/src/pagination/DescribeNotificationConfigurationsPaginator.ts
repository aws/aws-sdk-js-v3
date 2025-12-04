// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AutoScalingClient } from "../AutoScalingClient";
import {
  DescribeNotificationConfigurationsCommand,
  DescribeNotificationConfigurationsCommandInput,
  DescribeNotificationConfigurationsCommandOutput,
} from "../commands/DescribeNotificationConfigurationsCommand";
import { AutoScalingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeNotificationConfigurations: (
  config: AutoScalingPaginationConfiguration,
  input: DescribeNotificationConfigurationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeNotificationConfigurationsCommandOutput> = createPaginator<
  AutoScalingPaginationConfiguration,
  DescribeNotificationConfigurationsCommandInput,
  DescribeNotificationConfigurationsCommandOutput
>(AutoScalingClient, DescribeNotificationConfigurationsCommand, "NextToken", "NextToken", "MaxRecords");
