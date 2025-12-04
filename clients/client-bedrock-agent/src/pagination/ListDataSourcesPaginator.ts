// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { BedrockAgentClient } from "../BedrockAgentClient";
import {
  ListDataSourcesCommand,
  ListDataSourcesCommandInput,
  ListDataSourcesCommandOutput,
} from "../commands/ListDataSourcesCommand";
import { BedrockAgentPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDataSources: (
  config: BedrockAgentPaginationConfiguration,
  input: ListDataSourcesCommandInput,
  ...rest: any[]
) => Paginator<ListDataSourcesCommandOutput> = createPaginator<
  BedrockAgentPaginationConfiguration,
  ListDataSourcesCommandInput,
  ListDataSourcesCommandOutput
>(BedrockAgentClient, ListDataSourcesCommand, "nextToken", "nextToken", "maxResults");
