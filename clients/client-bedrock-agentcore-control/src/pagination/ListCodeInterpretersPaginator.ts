// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { BedrockAgentCoreControlClient } from "../BedrockAgentCoreControlClient";
import {
  ListCodeInterpretersCommand,
  ListCodeInterpretersCommandInput,
  ListCodeInterpretersCommandOutput,
} from "../commands/ListCodeInterpretersCommand";
import { BedrockAgentCoreControlPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCodeInterpreters: (
  config: BedrockAgentCoreControlPaginationConfiguration,
  input: ListCodeInterpretersCommandInput,
  ...rest: any[]
) => Paginator<ListCodeInterpretersCommandOutput> = createPaginator<
  BedrockAgentCoreControlPaginationConfiguration,
  ListCodeInterpretersCommandInput,
  ListCodeInterpretersCommandOutput
>(BedrockAgentCoreControlClient, ListCodeInterpretersCommand, "nextToken", "nextToken", "maxResults");
