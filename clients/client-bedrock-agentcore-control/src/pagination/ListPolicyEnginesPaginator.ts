// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { BedrockAgentCoreControlClient } from "../BedrockAgentCoreControlClient";
import {
  ListPolicyEnginesCommand,
  ListPolicyEnginesCommandInput,
  ListPolicyEnginesCommandOutput,
} from "../commands/ListPolicyEnginesCommand";
import { BedrockAgentCoreControlPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPolicyEngines: (
  config: BedrockAgentCoreControlPaginationConfiguration,
  input: ListPolicyEnginesCommandInput,
  ...rest: any[]
) => Paginator<ListPolicyEnginesCommandOutput> = createPaginator<
  BedrockAgentCoreControlPaginationConfiguration,
  ListPolicyEnginesCommandInput,
  ListPolicyEnginesCommandOutput
>(BedrockAgentCoreControlClient, ListPolicyEnginesCommand, "nextToken", "nextToken", "maxResults");
