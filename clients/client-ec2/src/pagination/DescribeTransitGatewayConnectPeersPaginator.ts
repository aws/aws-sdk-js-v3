// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeTransitGatewayConnectPeersCommand,
  DescribeTransitGatewayConnectPeersCommandInput,
  DescribeTransitGatewayConnectPeersCommandOutput,
} from "../commands/DescribeTransitGatewayConnectPeersCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeTransitGatewayConnectPeers: (
  config: EC2PaginationConfiguration,
  input: DescribeTransitGatewayConnectPeersCommandInput,
  ...rest: any[]
) => Paginator<DescribeTransitGatewayConnectPeersCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeTransitGatewayConnectPeersCommandInput,
  DescribeTransitGatewayConnectPeersCommandOutput
>(EC2Client, DescribeTransitGatewayConnectPeersCommand, "NextToken", "NextToken", "MaxResults");
