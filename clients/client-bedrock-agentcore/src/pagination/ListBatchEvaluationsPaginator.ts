// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentCoreClient } from "../BedrockAgentCoreClient";
import {
  ListBatchEvaluationsCommand,
  ListBatchEvaluationsCommandInput,
  ListBatchEvaluationsCommandOutput,
} from "../commands/ListBatchEvaluationsCommand";
import type { BedrockAgentCorePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListBatchEvaluations: (
  config: BedrockAgentCorePaginationConfiguration,
  input: ListBatchEvaluationsCommandInput,
  ...rest: any[]
) => Paginator<ListBatchEvaluationsCommandOutput> = createPaginator<
  BedrockAgentCorePaginationConfiguration,
  ListBatchEvaluationsCommandInput,
  ListBatchEvaluationsCommandOutput
>(BedrockAgentCoreClient, ListBatchEvaluationsCommand, "nextToken", "nextToken", "maxResults");
