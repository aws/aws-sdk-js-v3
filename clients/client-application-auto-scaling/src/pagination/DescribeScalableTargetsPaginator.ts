// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ApplicationAutoScalingClient } from "../ApplicationAutoScalingClient";
import {
  DescribeScalableTargetsCommand,
  DescribeScalableTargetsCommandInput,
  DescribeScalableTargetsCommandOutput,
} from "../commands/DescribeScalableTargetsCommand";
import { ApplicationAutoScalingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeScalableTargets: (
  config: ApplicationAutoScalingPaginationConfiguration,
  input: DescribeScalableTargetsCommandInput,
  ...rest: any[]
) => Paginator<DescribeScalableTargetsCommandOutput> = createPaginator<
  ApplicationAutoScalingPaginationConfiguration,
  DescribeScalableTargetsCommandInput,
  DescribeScalableTargetsCommandOutput
>(ApplicationAutoScalingClient, DescribeScalableTargetsCommand, "NextToken", "NextToken", "MaxResults");
