// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { BedrockAgentRuntimeClient } from "../BedrockAgentRuntimeClient";
import {
  ListInvocationsCommand,
  ListInvocationsCommandInput,
  ListInvocationsCommandOutput,
} from "../commands/ListInvocationsCommand";
import { BedrockAgentRuntimePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListInvocations: (
  config: BedrockAgentRuntimePaginationConfiguration,
  input: ListInvocationsCommandInput,
  ...rest: any[]
) => Paginator<ListInvocationsCommandOutput> = createPaginator<
  BedrockAgentRuntimePaginationConfiguration,
  ListInvocationsCommandInput,
  ListInvocationsCommandOutput
>(BedrockAgentRuntimeClient, ListInvocationsCommand, "nextToken", "nextToken", "maxResults");
