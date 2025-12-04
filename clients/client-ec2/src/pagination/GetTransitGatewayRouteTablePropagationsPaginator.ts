// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  GetTransitGatewayRouteTablePropagationsCommand,
  GetTransitGatewayRouteTablePropagationsCommandInput,
  GetTransitGatewayRouteTablePropagationsCommandOutput,
} from "../commands/GetTransitGatewayRouteTablePropagationsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateGetTransitGatewayRouteTablePropagations: (
  config: EC2PaginationConfiguration,
  input: GetTransitGatewayRouteTablePropagationsCommandInput,
  ...rest: any[]
) => Paginator<GetTransitGatewayRouteTablePropagationsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  GetTransitGatewayRouteTablePropagationsCommandInput,
  GetTransitGatewayRouteTablePropagationsCommandOutput
>(EC2Client, GetTransitGatewayRouteTablePropagationsCommand, "NextToken", "NextToken", "MaxResults");
