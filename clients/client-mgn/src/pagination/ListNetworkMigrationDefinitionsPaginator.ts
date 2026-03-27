// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListNetworkMigrationDefinitionsCommand,
  ListNetworkMigrationDefinitionsCommandInput,
  ListNetworkMigrationDefinitionsCommandOutput,
} from "../commands/ListNetworkMigrationDefinitionsCommand";
import { MgnClient } from "../MgnClient";
import type { MgnPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListNetworkMigrationDefinitions: (
  config: MgnPaginationConfiguration,
  input: ListNetworkMigrationDefinitionsCommandInput,
  ...rest: any[]
) => Paginator<ListNetworkMigrationDefinitionsCommandOutput> = createPaginator<
  MgnPaginationConfiguration,
  ListNetworkMigrationDefinitionsCommandInput,
  ListNetworkMigrationDefinitionsCommandOutput
>(MgnClient, ListNetworkMigrationDefinitionsCommand, "nextToken", "nextToken", "maxResults");
