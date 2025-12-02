// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { BedrockAgentCoreControlClient } from "../BedrockAgentCoreControlClient";
import {
  ListOnlineEvaluationConfigsCommand,
  ListOnlineEvaluationConfigsCommandInput,
  ListOnlineEvaluationConfigsCommandOutput,
} from "../commands/ListOnlineEvaluationConfigsCommand";
import { BedrockAgentCoreControlPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListOnlineEvaluationConfigs: (
  config: BedrockAgentCoreControlPaginationConfiguration,
  input: ListOnlineEvaluationConfigsCommandInput,
  ...rest: any[]
) => Paginator<ListOnlineEvaluationConfigsCommandOutput> = createPaginator<
  BedrockAgentCoreControlPaginationConfiguration,
  ListOnlineEvaluationConfigsCommandInput,
  ListOnlineEvaluationConfigsCommandOutput
>(BedrockAgentCoreControlClient, ListOnlineEvaluationConfigsCommand, "nextToken", "nextToken", "maxResults");
