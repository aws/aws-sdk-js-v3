// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeTransitGatewayPeeringAttachmentsCommand,
  DescribeTransitGatewayPeeringAttachmentsCommandInput,
  DescribeTransitGatewayPeeringAttachmentsCommandOutput,
} from "../commands/DescribeTransitGatewayPeeringAttachmentsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeTransitGatewayPeeringAttachments: (
  config: EC2PaginationConfiguration,
  input: DescribeTransitGatewayPeeringAttachmentsCommandInput,
  ...rest: any[]
) => Paginator<DescribeTransitGatewayPeeringAttachmentsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeTransitGatewayPeeringAttachmentsCommandInput,
  DescribeTransitGatewayPeeringAttachmentsCommandOutput
>(EC2Client, DescribeTransitGatewayPeeringAttachmentsCommand, "NextToken", "NextToken", "MaxResults");
