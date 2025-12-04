// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeTransitGatewayConnectsCommand,
  DescribeTransitGatewayConnectsCommandInput,
  DescribeTransitGatewayConnectsCommandOutput,
} from "../commands/DescribeTransitGatewayConnectsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeTransitGatewayConnects: (
  config: EC2PaginationConfiguration,
  input: DescribeTransitGatewayConnectsCommandInput,
  ...rest: any[]
) => Paginator<DescribeTransitGatewayConnectsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeTransitGatewayConnectsCommandInput,
  DescribeTransitGatewayConnectsCommandOutput
>(EC2Client, DescribeTransitGatewayConnectsCommand, "NextToken", "NextToken", "MaxResults");
