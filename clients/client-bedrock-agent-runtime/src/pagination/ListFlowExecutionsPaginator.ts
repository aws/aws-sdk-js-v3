// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { BedrockAgentRuntimeClient } from "../BedrockAgentRuntimeClient";
import {
  ListFlowExecutionsCommand,
  ListFlowExecutionsCommandInput,
  ListFlowExecutionsCommandOutput,
} from "../commands/ListFlowExecutionsCommand";
import { BedrockAgentRuntimePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFlowExecutions: (
  config: BedrockAgentRuntimePaginationConfiguration,
  input: ListFlowExecutionsCommandInput,
  ...rest: any[]
) => Paginator<ListFlowExecutionsCommandOutput> = createPaginator<
  BedrockAgentRuntimePaginationConfiguration,
  ListFlowExecutionsCommandInput,
  ListFlowExecutionsCommandOutput
>(BedrockAgentRuntimeClient, ListFlowExecutionsCommand, "nextToken", "nextToken", "maxResults");
