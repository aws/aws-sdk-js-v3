// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListNetworkMigrationInsightsCommand,
  ListNetworkMigrationInsightsCommandInput,
  ListNetworkMigrationInsightsCommandOutput,
} from "../commands/ListNetworkMigrationInsightsCommand";
import { MgnClient } from "../MgnClient";
import type { MgnPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListNetworkMigrationInsights: (
  config: MgnPaginationConfiguration,
  input: ListNetworkMigrationInsightsCommandInput,
  ...rest: any[]
) => Paginator<ListNetworkMigrationInsightsCommandOutput> = createPaginator<
  MgnPaginationConfiguration,
  ListNetworkMigrationInsightsCommandInput,
  ListNetworkMigrationInsightsCommandOutput
>(MgnClient, ListNetworkMigrationInsightsCommand, "nextToken", "nextToken", "maxResults");
