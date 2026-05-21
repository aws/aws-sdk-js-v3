// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentCoreControlClient } from "../BedrockAgentCoreControlClient";
import {
  ListDatasetExamplesCommand,
  ListDatasetExamplesCommandInput,
  ListDatasetExamplesCommandOutput,
} from "../commands/ListDatasetExamplesCommand";
import type { BedrockAgentCoreControlPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDatasetExamples: (
  config: BedrockAgentCoreControlPaginationConfiguration,
  input: ListDatasetExamplesCommandInput,
  ...rest: any[]
) => Paginator<ListDatasetExamplesCommandOutput> = createPaginator<
  BedrockAgentCoreControlPaginationConfiguration,
  ListDatasetExamplesCommandInput,
  ListDatasetExamplesCommandOutput
>(BedrockAgentCoreControlClient, ListDatasetExamplesCommand, "nextToken", "nextToken", "maxResults");
