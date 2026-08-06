// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentCoreControlClient } from "../BedrockAgentCoreControlClient";
import {
  ListGatewayRateLimitsCommand,
  ListGatewayRateLimitsCommandInput,
  ListGatewayRateLimitsCommandOutput,
} from "../commands/ListGatewayRateLimitsCommand";
import type { BedrockAgentCoreControlPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListGatewayRateLimits: (
  config: BedrockAgentCoreControlPaginationConfiguration,
  input: ListGatewayRateLimitsCommandInput,
  ...rest: any[]
) => Paginator<ListGatewayRateLimitsCommandOutput> = createPaginator<
  BedrockAgentCoreControlPaginationConfiguration,
  ListGatewayRateLimitsCommandInput,
  ListGatewayRateLimitsCommandOutput
>(BedrockAgentCoreControlClient, ListGatewayRateLimitsCommand, "nextToken", "nextToken", "maxResults");
