// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ApplicationAutoScalingClient } from "../ApplicationAutoScalingClient";
import {
  DescribeScalingActivitiesCommand,
  DescribeScalingActivitiesCommandInput,
  DescribeScalingActivitiesCommandOutput,
} from "../commands/DescribeScalingActivitiesCommand";
import { ApplicationAutoScalingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeScalingActivities: (
  config: ApplicationAutoScalingPaginationConfiguration,
  input: DescribeScalingActivitiesCommandInput,
  ...rest: any[]
) => Paginator<DescribeScalingActivitiesCommandOutput> = createPaginator<
  ApplicationAutoScalingPaginationConfiguration,
  DescribeScalingActivitiesCommandInput,
  DescribeScalingActivitiesCommandOutput
>(ApplicationAutoScalingClient, DescribeScalingActivitiesCommand, "NextToken", "NextToken", "MaxResults");
