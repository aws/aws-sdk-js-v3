// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetTransitGatewayRouteTableAssociationsCommand,
  GetTransitGatewayRouteTableAssociationsCommandInput,
  GetTransitGatewayRouteTableAssociationsCommandOutput,
} from "../commands/GetTransitGatewayRouteTableAssociationsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetTransitGatewayRouteTableAssociations: (
  config: EC2PaginationConfiguration,
  input: GetTransitGatewayRouteTableAssociationsCommandInput,
  ...rest: any[]
) => Paginator<GetTransitGatewayRouteTableAssociationsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  GetTransitGatewayRouteTableAssociationsCommandInput,
  GetTransitGatewayRouteTableAssociationsCommandOutput
>(EC2Client, GetTransitGatewayRouteTableAssociationsCommand, "NextToken", "NextToken", "MaxResults");
