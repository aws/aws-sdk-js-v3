// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { BedrockAgentCoreControlClient } from "../BedrockAgentCoreControlClient";
import {
  ListEvaluatorsCommand,
  ListEvaluatorsCommandInput,
  ListEvaluatorsCommandOutput,
} from "../commands/ListEvaluatorsCommand";
import { BedrockAgentCoreControlPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListEvaluators: (
  config: BedrockAgentCoreControlPaginationConfiguration,
  input: ListEvaluatorsCommandInput,
  ...rest: any[]
) => Paginator<ListEvaluatorsCommandOutput> = createPaginator<
  BedrockAgentCoreControlPaginationConfiguration,
  ListEvaluatorsCommandInput,
  ListEvaluatorsCommandOutput
>(BedrockAgentCoreControlClient, ListEvaluatorsCommand, "nextToken", "nextToken", "maxResults");
