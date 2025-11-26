// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeTransitGatewayVpcAttachmentsCommand,
  DescribeTransitGatewayVpcAttachmentsCommandInput,
  DescribeTransitGatewayVpcAttachmentsCommandOutput,
} from "../commands/DescribeTransitGatewayVpcAttachmentsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeTransitGatewayVpcAttachments: (
  config: EC2PaginationConfiguration,
  input: DescribeTransitGatewayVpcAttachmentsCommandInput,
  ...rest: any[]
) => Paginator<DescribeTransitGatewayVpcAttachmentsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeTransitGatewayVpcAttachmentsCommandInput,
  DescribeTransitGatewayVpcAttachmentsCommandOutput
>(EC2Client, DescribeTransitGatewayVpcAttachmentsCommand, "NextToken", "NextToken", "MaxResults");
