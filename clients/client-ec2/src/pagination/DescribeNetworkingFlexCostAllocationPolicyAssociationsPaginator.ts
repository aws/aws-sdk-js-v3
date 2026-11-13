// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeNetworkingFlexCostAllocationPolicyAssociationsCommand,
  DescribeNetworkingFlexCostAllocationPolicyAssociationsCommandInput,
  DescribeNetworkingFlexCostAllocationPolicyAssociationsCommandOutput,
} from "../commands/DescribeNetworkingFlexCostAllocationPolicyAssociationsCommand";
import { EC2Client } from "../EC2Client";
import type { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeNetworkingFlexCostAllocationPolicyAssociations: (
  config: EC2PaginationConfiguration,
  input: DescribeNetworkingFlexCostAllocationPolicyAssociationsCommandInput,
  ...rest: any[]
) => Paginator<DescribeNetworkingFlexCostAllocationPolicyAssociationsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeNetworkingFlexCostAllocationPolicyAssociationsCommandInput,
  DescribeNetworkingFlexCostAllocationPolicyAssociationsCommandOutput
>(EC2Client, DescribeNetworkingFlexCostAllocationPolicyAssociationsCommand, "NextToken", "NextToken", "MaxResults");
