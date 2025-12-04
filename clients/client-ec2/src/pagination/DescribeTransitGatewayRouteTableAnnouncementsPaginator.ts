// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeTransitGatewayRouteTableAnnouncementsCommand,
  DescribeTransitGatewayRouteTableAnnouncementsCommandInput,
  DescribeTransitGatewayRouteTableAnnouncementsCommandOutput,
} from "../commands/DescribeTransitGatewayRouteTableAnnouncementsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeTransitGatewayRouteTableAnnouncements: (
  config: EC2PaginationConfiguration,
  input: DescribeTransitGatewayRouteTableAnnouncementsCommandInput,
  ...rest: any[]
) => Paginator<DescribeTransitGatewayRouteTableAnnouncementsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeTransitGatewayRouteTableAnnouncementsCommandInput,
  DescribeTransitGatewayRouteTableAnnouncementsCommandOutput
>(EC2Client, DescribeTransitGatewayRouteTableAnnouncementsCommand, "NextToken", "NextToken", "MaxResults");
