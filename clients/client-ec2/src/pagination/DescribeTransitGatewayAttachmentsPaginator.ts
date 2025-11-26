// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  DescribeTransitGatewayAttachmentsCommand,
  DescribeTransitGatewayAttachmentsCommandInput,
  DescribeTransitGatewayAttachmentsCommandOutput,
} from "../commands/DescribeTransitGatewayAttachmentsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateDescribeTransitGatewayAttachments: (
  config: EC2PaginationConfiguration,
  input: DescribeTransitGatewayAttachmentsCommandInput,
  ...rest: any[]
) => Paginator<DescribeTransitGatewayAttachmentsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  DescribeTransitGatewayAttachmentsCommandInput,
  DescribeTransitGatewayAttachmentsCommandOutput
>(EC2Client, DescribeTransitGatewayAttachmentsCommand, "NextToken", "NextToken", "MaxResults");
