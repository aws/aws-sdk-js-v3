// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListNetworkMigrationMappingsCommand,
  ListNetworkMigrationMappingsCommandInput,
  ListNetworkMigrationMappingsCommandOutput,
} from "../commands/ListNetworkMigrationMappingsCommand";
import { MgnClient } from "../MgnClient";
import { MgnPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListNetworkMigrationMappings: (
  config: MgnPaginationConfiguration,
  input: ListNetworkMigrationMappingsCommandInput,
  ...rest: any[]
) => Paginator<ListNetworkMigrationMappingsCommandOutput> = createPaginator<
  MgnPaginationConfiguration,
  ListNetworkMigrationMappingsCommandInput,
  ListNetworkMigrationMappingsCommandOutput
>(MgnClient, ListNetworkMigrationMappingsCommand, "nextToken", "nextToken", "maxResults");
