// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchLocalGatewayRoutesCommand,
  SearchLocalGatewayRoutesCommandInput,
  SearchLocalGatewayRoutesCommandOutput,
} from "../commands/SearchLocalGatewayRoutesCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchLocalGatewayRoutes: (
  config: EC2PaginationConfiguration,
  input: SearchLocalGatewayRoutesCommandInput,
  ...rest: any[]
) => Paginator<SearchLocalGatewayRoutesCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  SearchLocalGatewayRoutesCommandInput,
  SearchLocalGatewayRoutesCommandOutput
>(EC2Client, SearchLocalGatewayRoutesCommand, "NextToken", "NextToken", "MaxResults");
