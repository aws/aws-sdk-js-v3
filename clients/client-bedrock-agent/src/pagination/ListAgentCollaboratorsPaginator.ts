// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { BedrockAgentClient } from "../BedrockAgentClient";
import {
  ListAgentCollaboratorsCommand,
  ListAgentCollaboratorsCommandInput,
  ListAgentCollaboratorsCommandOutput,
} from "../commands/ListAgentCollaboratorsCommand";
import { BedrockAgentPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAgentCollaborators: (
  config: BedrockAgentPaginationConfiguration,
  input: ListAgentCollaboratorsCommandInput,
  ...rest: any[]
) => Paginator<ListAgentCollaboratorsCommandOutput> = createPaginator<
  BedrockAgentPaginationConfiguration,
  ListAgentCollaboratorsCommandInput,
  ListAgentCollaboratorsCommandOutput
>(BedrockAgentClient, ListAgentCollaboratorsCommand, "nextToken", "nextToken", "maxResults");
