// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListNetworkMigrationAnalysisResultsCommand,
  ListNetworkMigrationAnalysisResultsCommandInput,
  ListNetworkMigrationAnalysisResultsCommandOutput,
} from "../commands/ListNetworkMigrationAnalysisResultsCommand";
import { MgnClient } from "../MgnClient";
import { MgnPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListNetworkMigrationAnalysisResults: (
  config: MgnPaginationConfiguration,
  input: ListNetworkMigrationAnalysisResultsCommandInput,
  ...rest: any[]
) => Paginator<ListNetworkMigrationAnalysisResultsCommandOutput> = createPaginator<
  MgnPaginationConfiguration,
  ListNetworkMigrationAnalysisResultsCommandInput,
  ListNetworkMigrationAnalysisResultsCommandOutput
>(MgnClient, ListNetworkMigrationAnalysisResultsCommand, "nextToken", "nextToken", "maxResults");
