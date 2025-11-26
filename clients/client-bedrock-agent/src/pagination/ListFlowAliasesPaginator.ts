// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentClient } from "../BedrockAgentClient";
import {
  ListFlowAliasesCommand,
  ListFlowAliasesCommandInput,
  ListFlowAliasesCommandOutput,
} from "../commands/ListFlowAliasesCommand";
import { BedrockAgentPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFlowAliases: (
  config: BedrockAgentPaginationConfiguration,
  input: ListFlowAliasesCommandInput,
  ...rest: any[]
) => Paginator<ListFlowAliasesCommandOutput> = createPaginator<
  BedrockAgentPaginationConfiguration,
  ListFlowAliasesCommandInput,
  ListFlowAliasesCommandOutput
>(BedrockAgentClient, ListFlowAliasesCommand, "nextToken", "nextToken", "maxResults");
