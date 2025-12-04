// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentCoreControlClient } from "../BedrockAgentCoreControlClient";
import {
  ListPolicyGenerationsCommand,
  ListPolicyGenerationsCommandInput,
  ListPolicyGenerationsCommandOutput,
} from "../commands/ListPolicyGenerationsCommand";
import { BedrockAgentCoreControlPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPolicyGenerations: (
  config: BedrockAgentCoreControlPaginationConfiguration,
  input: ListPolicyGenerationsCommandInput,
  ...rest: any[]
) => Paginator<ListPolicyGenerationsCommandOutput> = createPaginator<
  BedrockAgentCoreControlPaginationConfiguration,
  ListPolicyGenerationsCommandInput,
  ListPolicyGenerationsCommandOutput
>(BedrockAgentCoreControlClient, ListPolicyGenerationsCommand, "nextToken", "nextToken", "maxResults");
