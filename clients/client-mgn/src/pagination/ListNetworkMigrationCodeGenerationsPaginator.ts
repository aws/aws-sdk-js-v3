// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListNetworkMigrationCodeGenerationsCommand,
  ListNetworkMigrationCodeGenerationsCommandInput,
  ListNetworkMigrationCodeGenerationsCommandOutput,
} from "../commands/ListNetworkMigrationCodeGenerationsCommand";
import { MgnClient } from "../MgnClient";
import { MgnPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListNetworkMigrationCodeGenerations: (
  config: MgnPaginationConfiguration,
  input: ListNetworkMigrationCodeGenerationsCommandInput,
  ...rest: any[]
) => Paginator<ListNetworkMigrationCodeGenerationsCommandOutput> = createPaginator<
  MgnPaginationConfiguration,
  ListNetworkMigrationCodeGenerationsCommandInput,
  ListNetworkMigrationCodeGenerationsCommandOutput
>(MgnClient, ListNetworkMigrationCodeGenerationsCommand, "nextToken", "nextToken", "maxResults");
