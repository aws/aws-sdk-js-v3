// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetTransitGatewayAttachmentPropagationsCommand,
  GetTransitGatewayAttachmentPropagationsCommandInput,
  GetTransitGatewayAttachmentPropagationsCommandOutput,
} from "../commands/GetTransitGatewayAttachmentPropagationsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetTransitGatewayAttachmentPropagations: (
  config: EC2PaginationConfiguration,
  input: GetTransitGatewayAttachmentPropagationsCommandInput,
  ...rest: any[]
) => Paginator<GetTransitGatewayAttachmentPropagationsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  GetTransitGatewayAttachmentPropagationsCommandInput,
  GetTransitGatewayAttachmentPropagationsCommandOutput
>(EC2Client, GetTransitGatewayAttachmentPropagationsCommand, "NextToken", "NextToken", "MaxResults");
