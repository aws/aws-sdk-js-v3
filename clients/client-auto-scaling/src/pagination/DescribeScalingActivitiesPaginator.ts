// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AutoScalingClient } from "../AutoScalingClient";
import {
  DescribeScalingActivitiesCommand,
  DescribeScalingActivitiesCommandInput,
  DescribeScalingActivitiesCommandOutput,
} from "../commands/DescribeScalingActivitiesCommand";
import { AutoScalingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeScalingActivities: (
  config: AutoScalingPaginationConfiguration,
  input: DescribeScalingActivitiesCommandInput,
  ...rest: any[]
) => Paginator<DescribeScalingActivitiesCommandOutput> = createPaginator<
  AutoScalingPaginationConfiguration,
  DescribeScalingActivitiesCommandInput,
  DescribeScalingActivitiesCommandOutput
>(AutoScalingClient, DescribeScalingActivitiesCommand, "NextToken", "NextToken", "MaxRecords");
