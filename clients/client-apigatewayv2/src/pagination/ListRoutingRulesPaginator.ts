// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ApiGatewayV2Client } from "../ApiGatewayV2Client";
import {
  ListRoutingRulesCommand,
  ListRoutingRulesCommandInput,
  ListRoutingRulesCommandOutput,
} from "../commands/ListRoutingRulesCommand";
import { ApiGatewayV2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRoutingRules: (
  config: ApiGatewayV2PaginationConfiguration,
  input: ListRoutingRulesCommandInput,
  ...rest: any[]
) => Paginator<ListRoutingRulesCommandOutput> = createPaginator<
  ApiGatewayV2PaginationConfiguration,
  ListRoutingRulesCommandInput,
  ListRoutingRulesCommandOutput
>(ApiGatewayV2Client, ListRoutingRulesCommand, "NextToken", "NextToken", "MaxResults");
