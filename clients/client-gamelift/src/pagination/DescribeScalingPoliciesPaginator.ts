// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeScalingPoliciesCommand,
  DescribeScalingPoliciesCommandInput,
  DescribeScalingPoliciesCommandOutput,
} from "../commands/DescribeScalingPoliciesCommand";
import { GameLiftClient } from "../GameLiftClient";
import { GameLiftPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeScalingPolicies: (
  config: GameLiftPaginationConfiguration,
  input: DescribeScalingPoliciesCommandInput,
  ...rest: any[]
) => Paginator<DescribeScalingPoliciesCommandOutput> = createPaginator<
  GameLiftPaginationConfiguration,
  DescribeScalingPoliciesCommandInput,
  DescribeScalingPoliciesCommandOutput
>(GameLiftClient, DescribeScalingPoliciesCommand, "NextToken", "NextToken", "Limit");
