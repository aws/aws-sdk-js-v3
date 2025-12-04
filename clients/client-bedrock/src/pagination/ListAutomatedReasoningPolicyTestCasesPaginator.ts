// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockClient } from "../BedrockClient";
import {
  ListAutomatedReasoningPolicyTestCasesCommand,
  ListAutomatedReasoningPolicyTestCasesCommandInput,
  ListAutomatedReasoningPolicyTestCasesCommandOutput,
} from "../commands/ListAutomatedReasoningPolicyTestCasesCommand";
import { BedrockPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAutomatedReasoningPolicyTestCases: (
  config: BedrockPaginationConfiguration,
  input: ListAutomatedReasoningPolicyTestCasesCommandInput,
  ...rest: any[]
) => Paginator<ListAutomatedReasoningPolicyTestCasesCommandOutput> = createPaginator<
  BedrockPaginationConfiguration,
  ListAutomatedReasoningPolicyTestCasesCommandInput,
  ListAutomatedReasoningPolicyTestCasesCommandOutput
>(BedrockClient, ListAutomatedReasoningPolicyTestCasesCommand, "nextToken", "nextToken", "maxResults");
