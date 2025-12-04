// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeTransitGatewaysCommand,
  DescribeTransitGatewaysCommandInput,
  DescribeTransitGatewaysCommandOutput,
} from "../commands/DescribeTransitGatewaysCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeTransitGateways: (
  config: EC2PaginationConfiguration,
  input: DescribeTransitGatewaysCommandInput,
  ...rest: any[]
) => Paginator<DescribeTransitGatewaysCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeTransitGatewaysCommandInput,
  DescribeTransitGatewaysCommandOutput
>(EC2Client, DescribeTransitGatewaysCommand, "NextToken", "NextToken", "MaxResults");
