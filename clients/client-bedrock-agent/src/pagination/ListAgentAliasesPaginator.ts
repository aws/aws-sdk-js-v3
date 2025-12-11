// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentClient } from "../BedrockAgentClient";
import {
  ListAgentAliasesCommand,
  ListAgentAliasesCommandInput,
  ListAgentAliasesCommandOutput,
} from "../commands/ListAgentAliasesCommand";
import { BedrockAgentPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAgentAliases: (
  config: BedrockAgentPaginationConfiguration,
  input: ListAgentAliasesCommandInput,
  ...rest: any[]
) => Paginator<ListAgentAliasesCommandOutput> = createPaginator<
  BedrockAgentPaginationConfiguration,
  ListAgentAliasesCommandInput,
  ListAgentAliasesCommandOutput
>(BedrockAgentClient, ListAgentAliasesCommand, "nextToken", "nextToken", "maxResults");
