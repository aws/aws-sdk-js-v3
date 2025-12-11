// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentRuntimeClient } from "../BedrockAgentRuntimeClient";
import {
  ListInvocationStepsCommand,
  ListInvocationStepsCommandInput,
  ListInvocationStepsCommandOutput,
} from "../commands/ListInvocationStepsCommand";
import { BedrockAgentRuntimePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListInvocationSteps: (
  config: BedrockAgentRuntimePaginationConfiguration,
  input: ListInvocationStepsCommandInput,
  ...rest: any[]
) => Paginator<ListInvocationStepsCommandOutput> = createPaginator<
  BedrockAgentRuntimePaginationConfiguration,
  ListInvocationStepsCommandInput,
  ListInvocationStepsCommandOutput
>(BedrockAgentRuntimeClient, ListInvocationStepsCommand, "nextToken", "nextToken", "maxResults");
