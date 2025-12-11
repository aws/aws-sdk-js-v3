// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeEgressOnlyInternetGatewaysCommand,
  DescribeEgressOnlyInternetGatewaysCommandInput,
  DescribeEgressOnlyInternetGatewaysCommandOutput,
} from "../commands/DescribeEgressOnlyInternetGatewaysCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeEgressOnlyInternetGateways: (
  config: EC2PaginationConfiguration,
  input: DescribeEgressOnlyInternetGatewaysCommandInput,
  ...rest: any[]
) => Paginator<DescribeEgressOnlyInternetGatewaysCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeEgressOnlyInternetGatewaysCommandInput,
  DescribeEgressOnlyInternetGatewaysCommandOutput
>(EC2Client, DescribeEgressOnlyInternetGatewaysCommand, "NextToken", "NextToken", "MaxResults");
