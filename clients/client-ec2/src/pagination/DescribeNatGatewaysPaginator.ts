// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeNatGatewaysCommand,
  DescribeNatGatewaysCommandInput,
  DescribeNatGatewaysCommandOutput,
} from "../commands/DescribeNatGatewaysCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeNatGateways: (
  config: EC2PaginationConfiguration,
  input: DescribeNatGatewaysCommandInput,
  ...rest: any[]
) => Paginator<DescribeNatGatewaysCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeNatGatewaysCommandInput,
  DescribeNatGatewaysCommandOutput
>(EC2Client, DescribeNatGatewaysCommand, "NextToken", "NextToken", "MaxResults");
