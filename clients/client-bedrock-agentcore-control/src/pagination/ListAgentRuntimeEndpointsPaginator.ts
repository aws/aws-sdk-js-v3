// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { BedrockAgentCoreControlClient } from "../BedrockAgentCoreControlClient";
import {
  ListAgentRuntimeEndpointsCommand,
  ListAgentRuntimeEndpointsCommandInput,
  ListAgentRuntimeEndpointsCommandOutput,
} from "../commands/ListAgentRuntimeEndpointsCommand";
import { BedrockAgentCoreControlPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAgentRuntimeEndpoints: (
  config: BedrockAgentCoreControlPaginationConfiguration,
  input: ListAgentRuntimeEndpointsCommandInput,
  ...rest: any[]
) => Paginator<ListAgentRuntimeEndpointsCommandOutput> = createPaginator<
  BedrockAgentCoreControlPaginationConfiguration,
  ListAgentRuntimeEndpointsCommandInput,
  ListAgentRuntimeEndpointsCommandOutput
>(BedrockAgentCoreControlClient, ListAgentRuntimeEndpointsCommand, "nextToken", "nextToken", "maxResults");
