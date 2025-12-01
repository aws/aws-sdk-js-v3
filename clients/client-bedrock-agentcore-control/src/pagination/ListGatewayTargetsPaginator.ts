// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentCoreControlClient } from "../BedrockAgentCoreControlClient";
import {
  ListGatewayTargetsCommand,
  ListGatewayTargetsCommandInput,
  ListGatewayTargetsCommandOutput,
} from "../commands/ListGatewayTargetsCommand";
import { BedrockAgentCoreControlPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListGatewayTargets: (
  config: BedrockAgentCoreControlPaginationConfiguration,
  input: ListGatewayTargetsCommandInput,
  ...rest: any[]
) => Paginator<ListGatewayTargetsCommandOutput> = createPaginator<
  BedrockAgentCoreControlPaginationConfiguration,
  ListGatewayTargetsCommandInput,
  ListGatewayTargetsCommandOutput
>(BedrockAgentCoreControlClient, ListGatewayTargetsCommand, "nextToken", "nextToken", "maxResults");
