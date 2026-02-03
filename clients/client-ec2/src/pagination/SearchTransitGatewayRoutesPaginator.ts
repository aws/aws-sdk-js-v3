// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchTransitGatewayRoutesCommand,
  SearchTransitGatewayRoutesCommandInput,
  SearchTransitGatewayRoutesCommandOutput,
} from "../commands/SearchTransitGatewayRoutesCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchTransitGatewayRoutes: (
  config: EC2PaginationConfiguration,
  input: SearchTransitGatewayRoutesCommandInput,
  ...rest: any[]
) => Paginator<SearchTransitGatewayRoutesCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  SearchTransitGatewayRoutesCommandInput,
  SearchTransitGatewayRoutesCommandOutput
>(EC2Client, SearchTransitGatewayRoutesCommand, "NextToken", "NextToken", "MaxResults");
