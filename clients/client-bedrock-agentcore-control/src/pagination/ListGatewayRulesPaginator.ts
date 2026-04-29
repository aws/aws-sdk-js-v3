// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentCoreControlClient } from "../BedrockAgentCoreControlClient";
import {
  ListGatewayRulesCommand,
  ListGatewayRulesCommandInput,
  ListGatewayRulesCommandOutput,
} from "../commands/ListGatewayRulesCommand";
import type { BedrockAgentCoreControlPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListGatewayRules: (
  config: BedrockAgentCoreControlPaginationConfiguration,
  input: ListGatewayRulesCommandInput,
  ...rest: any[]
) => Paginator<ListGatewayRulesCommandOutput> = createPaginator<
  BedrockAgentCoreControlPaginationConfiguration,
  ListGatewayRulesCommandInput,
  ListGatewayRulesCommandOutput
>(BedrockAgentCoreControlClient, ListGatewayRulesCommand, "nextToken", "nextToken", "maxResults");
