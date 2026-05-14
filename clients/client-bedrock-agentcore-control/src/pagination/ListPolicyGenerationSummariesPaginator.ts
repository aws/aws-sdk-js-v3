// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentCoreControlClient } from "../BedrockAgentCoreControlClient";
import {
  ListPolicyGenerationSummariesCommand,
  ListPolicyGenerationSummariesCommandInput,
  ListPolicyGenerationSummariesCommandOutput,
} from "../commands/ListPolicyGenerationSummariesCommand";
import type { BedrockAgentCoreControlPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPolicyGenerationSummaries: (
  config: BedrockAgentCoreControlPaginationConfiguration,
  input: ListPolicyGenerationSummariesCommandInput,
  ...rest: any[]
) => Paginator<ListPolicyGenerationSummariesCommandOutput> = createPaginator<
  BedrockAgentCoreControlPaginationConfiguration,
  ListPolicyGenerationSummariesCommandInput,
  ListPolicyGenerationSummariesCommandOutput
>(BedrockAgentCoreControlClient, ListPolicyGenerationSummariesCommand, "nextToken", "nextToken", "maxResults");
