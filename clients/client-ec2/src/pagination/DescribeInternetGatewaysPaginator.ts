// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeInternetGatewaysCommand,
  DescribeInternetGatewaysCommandInput,
  DescribeInternetGatewaysCommandOutput,
} from "../commands/DescribeInternetGatewaysCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeInternetGateways: (
  config: EC2PaginationConfiguration,
  input: DescribeInternetGatewaysCommandInput,
  ...rest: any[]
) => Paginator<DescribeInternetGatewaysCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeInternetGatewaysCommandInput,
  DescribeInternetGatewaysCommandOutput
>(EC2Client, DescribeInternetGatewaysCommand, "NextToken", "NextToken", "MaxResults");
