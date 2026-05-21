// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentCoreControlClient } from "../BedrockAgentCoreControlClient";
import {
  ListDatasetVersionsCommand,
  ListDatasetVersionsCommandInput,
  ListDatasetVersionsCommandOutput,
} from "../commands/ListDatasetVersionsCommand";
import type { BedrockAgentCoreControlPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDatasetVersions: (
  config: BedrockAgentCoreControlPaginationConfiguration,
  input: ListDatasetVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListDatasetVersionsCommandOutput> = createPaginator<
  BedrockAgentCoreControlPaginationConfiguration,
  ListDatasetVersionsCommandInput,
  ListDatasetVersionsCommandOutput
>(BedrockAgentCoreControlClient, ListDatasetVersionsCommand, "nextToken", "nextToken", "maxResults");
