// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockClient } from "../BedrockClient";
import {
  ListAutomatedReasoningPolicyTestResultsCommand,
  ListAutomatedReasoningPolicyTestResultsCommandInput,
  ListAutomatedReasoningPolicyTestResultsCommandOutput,
} from "../commands/ListAutomatedReasoningPolicyTestResultsCommand";
import { BedrockPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAutomatedReasoningPolicyTestResults: (
  config: BedrockPaginationConfiguration,
  input: ListAutomatedReasoningPolicyTestResultsCommandInput,
  ...rest: any[]
) => Paginator<ListAutomatedReasoningPolicyTestResultsCommandOutput> = createPaginator<
  BedrockPaginationConfiguration,
  ListAutomatedReasoningPolicyTestResultsCommandInput,
  ListAutomatedReasoningPolicyTestResultsCommandOutput
>(BedrockClient, ListAutomatedReasoningPolicyTestResultsCommand, "nextToken", "nextToken", "maxResults");
