// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentClient } from "../BedrockAgentClient";
import { ListFlowsCommand, ListFlowsCommandInput, ListFlowsCommandOutput } from "../commands/ListFlowsCommand";
import { BedrockAgentPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFlows: (
  config: BedrockAgentPaginationConfiguration,
  input: ListFlowsCommandInput,
  ...rest: any[]
) => Paginator<ListFlowsCommandOutput> = createPaginator<
  BedrockAgentPaginationConfiguration,
  ListFlowsCommandInput,
  ListFlowsCommandOutput
>(BedrockAgentClient, ListFlowsCommand, "nextToken", "nextToken", "maxResults");
