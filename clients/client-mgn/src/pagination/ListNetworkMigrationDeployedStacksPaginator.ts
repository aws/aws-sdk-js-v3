// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListNetworkMigrationDeployedStacksCommand,
  ListNetworkMigrationDeployedStacksCommandInput,
  ListNetworkMigrationDeployedStacksCommandOutput,
} from "../commands/ListNetworkMigrationDeployedStacksCommand";
import { MgnClient } from "../MgnClient";
import { MgnPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListNetworkMigrationDeployedStacks: (
  config: MgnPaginationConfiguration,
  input: ListNetworkMigrationDeployedStacksCommandInput,
  ...rest: any[]
) => Paginator<ListNetworkMigrationDeployedStacksCommandOutput> = createPaginator<
  MgnPaginationConfiguration,
  ListNetworkMigrationDeployedStacksCommandInput,
  ListNetworkMigrationDeployedStacksCommandOutput
>(MgnClient, ListNetworkMigrationDeployedStacksCommand, "nextToken", "nextToken", "maxResults");
