// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { BedrockAgentCoreControlClient } from "../BedrockAgentCoreControlClient";
import {
  ListAgentRuntimesCommand,
  ListAgentRuntimesCommandInput,
  ListAgentRuntimesCommandOutput,
} from "../commands/ListAgentRuntimesCommand";
import { BedrockAgentCoreControlPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAgentRuntimes: (
  config: BedrockAgentCoreControlPaginationConfiguration,
  input: ListAgentRuntimesCommandInput,
  ...rest: any[]
) => Paginator<ListAgentRuntimesCommandOutput> = createPaginator<
  BedrockAgentCoreControlPaginationConfiguration,
  ListAgentRuntimesCommandInput,
  ListAgentRuntimesCommandOutput
>(BedrockAgentCoreControlClient, ListAgentRuntimesCommand, "nextToken", "nextToken", "maxResults");
