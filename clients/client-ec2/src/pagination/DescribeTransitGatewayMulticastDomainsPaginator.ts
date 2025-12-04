// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeTransitGatewayMulticastDomainsCommand,
  DescribeTransitGatewayMulticastDomainsCommandInput,
  DescribeTransitGatewayMulticastDomainsCommandOutput,
} from "../commands/DescribeTransitGatewayMulticastDomainsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeTransitGatewayMulticastDomains: (
  config: EC2PaginationConfiguration,
  input: DescribeTransitGatewayMulticastDomainsCommandInput,
  ...rest: any[]
) => Paginator<DescribeTransitGatewayMulticastDomainsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeTransitGatewayMulticastDomainsCommandInput,
  DescribeTransitGatewayMulticastDomainsCommandOutput
>(EC2Client, DescribeTransitGatewayMulticastDomainsCommand, "NextToken", "NextToken", "MaxResults");
