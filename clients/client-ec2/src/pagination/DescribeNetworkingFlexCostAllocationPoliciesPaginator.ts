// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeNetworkingFlexCostAllocationPoliciesCommand,
  DescribeNetworkingFlexCostAllocationPoliciesCommandInput,
  DescribeNetworkingFlexCostAllocationPoliciesCommandOutput,
} from "../commands/DescribeNetworkingFlexCostAllocationPoliciesCommand";
import { EC2Client } from "../EC2Client";
import type { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeNetworkingFlexCostAllocationPolicies: (
  config: EC2PaginationConfiguration,
  input: DescribeNetworkingFlexCostAllocationPoliciesCommandInput,
  ...rest: any[]
) => Paginator<DescribeNetworkingFlexCostAllocationPoliciesCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeNetworkingFlexCostAllocationPoliciesCommandInput,
  DescribeNetworkingFlexCostAllocationPoliciesCommandOutput
>(EC2Client, DescribeNetworkingFlexCostAllocationPoliciesCommand, "NextToken", "NextToken", "MaxResults");
