// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeTransitGatewayPolicyTablesCommand,
  DescribeTransitGatewayPolicyTablesCommandInput,
  DescribeTransitGatewayPolicyTablesCommandOutput,
} from "../commands/DescribeTransitGatewayPolicyTablesCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeTransitGatewayPolicyTables: (
  config: EC2PaginationConfiguration,
  input: DescribeTransitGatewayPolicyTablesCommandInput,
  ...rest: any[]
) => Paginator<DescribeTransitGatewayPolicyTablesCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeTransitGatewayPolicyTablesCommandInput,
  DescribeTransitGatewayPolicyTablesCommandOutput
>(EC2Client, DescribeTransitGatewayPolicyTablesCommand, "NextToken", "NextToken", "MaxResults");
