// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListNetworkMigrationAnalysesCommand,
  ListNetworkMigrationAnalysesCommandInput,
  ListNetworkMigrationAnalysesCommandOutput,
} from "../commands/ListNetworkMigrationAnalysesCommand";
import { MgnClient } from "../MgnClient";
import { MgnPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListNetworkMigrationAnalyses: (
  config: MgnPaginationConfiguration,
  input: ListNetworkMigrationAnalysesCommandInput,
  ...rest: any[]
) => Paginator<ListNetworkMigrationAnalysesCommandOutput> = createPaginator<
  MgnPaginationConfiguration,
  ListNetworkMigrationAnalysesCommandInput,
  ListNetworkMigrationAnalysesCommandOutput
>(MgnClient, ListNetworkMigrationAnalysesCommand, "nextToken", "nextToken", "maxResults");
