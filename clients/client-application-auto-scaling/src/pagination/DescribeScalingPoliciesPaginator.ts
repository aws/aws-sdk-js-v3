// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ApplicationAutoScalingClient } from "../ApplicationAutoScalingClient";
import {
  DescribeScalingPoliciesCommand,
  DescribeScalingPoliciesCommandInput,
  DescribeScalingPoliciesCommandOutput,
} from "../commands/DescribeScalingPoliciesCommand";
import { ApplicationAutoScalingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeScalingPolicies: (
  config: ApplicationAutoScalingPaginationConfiguration,
  input: DescribeScalingPoliciesCommandInput,
  ...rest: any[]
) => Paginator<DescribeScalingPoliciesCommandOutput> = createPaginator<
  ApplicationAutoScalingPaginationConfiguration,
  DescribeScalingPoliciesCommandInput,
  DescribeScalingPoliciesCommandOutput
>(ApplicationAutoScalingClient, DescribeScalingPoliciesCommand, "NextToken", "NextToken", "MaxResults");
