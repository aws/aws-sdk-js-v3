// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentCoreControlClient } from "../BedrockAgentCoreControlClient";
import {
  ListPolicySummariesCommand,
  ListPolicySummariesCommandInput,
  ListPolicySummariesCommandOutput,
} from "../commands/ListPolicySummariesCommand";
import type { BedrockAgentCoreControlPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPolicySummaries: (
  config: BedrockAgentCoreControlPaginationConfiguration,
  input: ListPolicySummariesCommandInput,
  ...rest: any[]
) => Paginator<ListPolicySummariesCommandOutput> = createPaginator<
  BedrockAgentCoreControlPaginationConfiguration,
  ListPolicySummariesCommandInput,
  ListPolicySummariesCommandOutput
>(BedrockAgentCoreControlClient, ListPolicySummariesCommand, "nextToken", "nextToken", "maxResults");
