// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { BedrockClient } from "../BedrockClient";
import {
  ListAutomatedReasoningPolicyBuildWorkflowsCommand,
  ListAutomatedReasoningPolicyBuildWorkflowsCommandInput,
  ListAutomatedReasoningPolicyBuildWorkflowsCommandOutput,
} from "../commands/ListAutomatedReasoningPolicyBuildWorkflowsCommand";
import { BedrockPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAutomatedReasoningPolicyBuildWorkflows: (
  config: BedrockPaginationConfiguration,
  input: ListAutomatedReasoningPolicyBuildWorkflowsCommandInput,
  ...rest: any[]
) => Paginator<ListAutomatedReasoningPolicyBuildWorkflowsCommandOutput> = createPaginator<
  BedrockPaginationConfiguration,
  ListAutomatedReasoningPolicyBuildWorkflowsCommandInput,
  ListAutomatedReasoningPolicyBuildWorkflowsCommandOutput
>(BedrockClient, ListAutomatedReasoningPolicyBuildWorkflowsCommand, "nextToken", "nextToken", "maxResults");
