// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentCoreControlClient } from "../BedrockAgentCoreControlClient";
import {
  ListPolicyEngineSummariesCommand,
  ListPolicyEngineSummariesCommandInput,
  ListPolicyEngineSummariesCommandOutput,
} from "../commands/ListPolicyEngineSummariesCommand";
import type { BedrockAgentCoreControlPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPolicyEngineSummaries: (
  config: BedrockAgentCoreControlPaginationConfiguration,
  input: ListPolicyEngineSummariesCommandInput,
  ...rest: any[]
) => Paginator<ListPolicyEngineSummariesCommandOutput> = createPaginator<
  BedrockAgentCoreControlPaginationConfiguration,
  ListPolicyEngineSummariesCommandInput,
  ListPolicyEngineSummariesCommandOutput
>(BedrockAgentCoreControlClient, ListPolicyEngineSummariesCommand, "nextToken", "nextToken", "maxResults");
