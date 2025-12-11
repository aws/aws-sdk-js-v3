// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentClient } from "../BedrockAgentClient";
import {
  ListAgentVersionsCommand,
  ListAgentVersionsCommandInput,
  ListAgentVersionsCommandOutput,
} from "../commands/ListAgentVersionsCommand";
import { BedrockAgentPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAgentVersions: (
  config: BedrockAgentPaginationConfiguration,
  input: ListAgentVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListAgentVersionsCommandOutput> = createPaginator<
  BedrockAgentPaginationConfiguration,
  ListAgentVersionsCommandInput,
  ListAgentVersionsCommandOutput
>(BedrockAgentClient, ListAgentVersionsCommand, "nextToken", "nextToken", "maxResults");
