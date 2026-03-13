// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListNetworkMigrationExecutionsCommand,
  ListNetworkMigrationExecutionsCommandInput,
  ListNetworkMigrationExecutionsCommandOutput,
} from "../commands/ListNetworkMigrationExecutionsCommand";
import { MgnClient } from "../MgnClient";
import { MgnPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListNetworkMigrationExecutions: (
  config: MgnPaginationConfiguration,
  input: ListNetworkMigrationExecutionsCommandInput,
  ...rest: any[]
) => Paginator<ListNetworkMigrationExecutionsCommandOutput> = createPaginator<
  MgnPaginationConfiguration,
  ListNetworkMigrationExecutionsCommandInput,
  ListNetworkMigrationExecutionsCommandOutput
>(MgnClient, ListNetworkMigrationExecutionsCommand, "nextToken", "nextToken", "maxResults");
