// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListNetworkMigrationMappingUpdatesCommand,
  ListNetworkMigrationMappingUpdatesCommandInput,
  ListNetworkMigrationMappingUpdatesCommandOutput,
} from "../commands/ListNetworkMigrationMappingUpdatesCommand";
import { MgnClient } from "../MgnClient";
import type { MgnPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListNetworkMigrationMappingUpdates: (
  config: MgnPaginationConfiguration,
  input: ListNetworkMigrationMappingUpdatesCommandInput,
  ...rest: any[]
) => Paginator<ListNetworkMigrationMappingUpdatesCommandOutput> = createPaginator<
  MgnPaginationConfiguration,
  ListNetworkMigrationMappingUpdatesCommandInput,
  ListNetworkMigrationMappingUpdatesCommandOutput
>(MgnClient, ListNetworkMigrationMappingUpdatesCommand, "nextToken", "nextToken", "maxResults");
