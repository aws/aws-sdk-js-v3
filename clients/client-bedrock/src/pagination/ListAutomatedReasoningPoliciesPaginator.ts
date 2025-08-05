// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { BedrockClient } from "../BedrockClient";
import {
  ListAutomatedReasoningPoliciesCommand,
  ListAutomatedReasoningPoliciesCommandInput,
  ListAutomatedReasoningPoliciesCommandOutput,
} from "../commands/ListAutomatedReasoningPoliciesCommand";
import { BedrockPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAutomatedReasoningPolicies: (
  config: BedrockPaginationConfiguration,
  input: ListAutomatedReasoningPoliciesCommandInput,
  ...rest: any[]
) => Paginator<ListAutomatedReasoningPoliciesCommandOutput> = createPaginator<
  BedrockPaginationConfiguration,
  ListAutomatedReasoningPoliciesCommandInput,
  ListAutomatedReasoningPoliciesCommandOutput
>(BedrockClient, ListAutomatedReasoningPoliciesCommand, "nextToken", "nextToken", "maxResults");
