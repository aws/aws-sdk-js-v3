// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentCoreClient } from "../BedrockAgentCoreClient";
import {
  ListDatasetGenerationsCommand,
  ListDatasetGenerationsCommandInput,
  ListDatasetGenerationsCommandOutput,
} from "../commands/ListDatasetGenerationsCommand";
import type { BedrockAgentCorePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDatasetGenerations: (
  config: BedrockAgentCorePaginationConfiguration,
  input: ListDatasetGenerationsCommandInput,
  ...rest: any[]
) => Paginator<ListDatasetGenerationsCommandOutput> = createPaginator<
  BedrockAgentCorePaginationConfiguration,
  ListDatasetGenerationsCommandInput,
  ListDatasetGenerationsCommandOutput
>(BedrockAgentCoreClient, ListDatasetGenerationsCommand, "nextToken", "nextToken", "maxResults");
