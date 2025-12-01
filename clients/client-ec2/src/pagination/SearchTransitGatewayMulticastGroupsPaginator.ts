// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  SearchTransitGatewayMulticastGroupsCommand,
  SearchTransitGatewayMulticastGroupsCommandInput,
  SearchTransitGatewayMulticastGroupsCommandOutput,
} from "../commands/SearchTransitGatewayMulticastGroupsCommand";
import { EC2Client } from "../EC2Client";
import { EC2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateSearchTransitGatewayMulticastGroups: (
  config: EC2PaginationConfiguration,
  input: SearchTransitGatewayMulticastGroupsCommandInput,
  ...rest: any[]
) => Paginator<SearchTransitGatewayMulticastGroupsCommandOutput> = createPaginator<
  EC2PaginationConfiguration,
  SearchTransitGatewayMulticastGroupsCommandInput,
  SearchTransitGatewayMulticastGroupsCommandOutput
>(EC2Client, SearchTransitGatewayMulticastGroupsCommand, "NextToken", "NextToken", "MaxResults");
