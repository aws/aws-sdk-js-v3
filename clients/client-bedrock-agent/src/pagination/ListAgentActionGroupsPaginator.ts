// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentClient } from "../BedrockAgentClient";
import {
  ListAgentActionGroupsCommand,
  ListAgentActionGroupsCommandInput,
  ListAgentActionGroupsCommandOutput,
} from "../commands/ListAgentActionGroupsCommand";
import { BedrockAgentPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAgentActionGroups: (
  config: BedrockAgentPaginationConfiguration,
  input: ListAgentActionGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListAgentActionGroupsCommandOutput> = createPaginator<
  BedrockAgentPaginationConfiguration,
  ListAgentActionGroupsCommandInput,
  ListAgentActionGroupsCommandOutput
>(BedrockAgentClient, ListAgentActionGroupsCommand, "nextToken", "nextToken", "maxResults");
