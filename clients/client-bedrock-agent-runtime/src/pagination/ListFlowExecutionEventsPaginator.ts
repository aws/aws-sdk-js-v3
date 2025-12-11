// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentRuntimeClient } from "../BedrockAgentRuntimeClient";
import {
  ListFlowExecutionEventsCommand,
  ListFlowExecutionEventsCommandInput,
  ListFlowExecutionEventsCommandOutput,
} from "../commands/ListFlowExecutionEventsCommand";
import { BedrockAgentRuntimePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFlowExecutionEvents: (
  config: BedrockAgentRuntimePaginationConfiguration,
  input: ListFlowExecutionEventsCommandInput,
  ...rest: any[]
) => Paginator<ListFlowExecutionEventsCommandOutput> = createPaginator<
  BedrockAgentRuntimePaginationConfiguration,
  ListFlowExecutionEventsCommandInput,
  ListFlowExecutionEventsCommandOutput
>(BedrockAgentRuntimeClient, ListFlowExecutionEventsCommand, "nextToken", "nextToken", "maxResults");
