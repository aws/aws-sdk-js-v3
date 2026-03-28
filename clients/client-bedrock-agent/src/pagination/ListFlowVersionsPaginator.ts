// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentClient } from "../BedrockAgentClient";
import {
  ListFlowVersionsCommand,
  ListFlowVersionsCommandInput,
  ListFlowVersionsCommandOutput,
} from "../commands/ListFlowVersionsCommand";
import type { BedrockAgentPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFlowVersions: (
  config: BedrockAgentPaginationConfiguration,
  input: ListFlowVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListFlowVersionsCommandOutput> = createPaginator<
  BedrockAgentPaginationConfiguration,
  ListFlowVersionsCommandInput,
  ListFlowVersionsCommandOutput
>(BedrockAgentClient, ListFlowVersionsCommand, "nextToken", "nextToken", "maxResults");
