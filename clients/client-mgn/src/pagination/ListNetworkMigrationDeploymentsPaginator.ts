// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListNetworkMigrationDeploymentsCommand,
  ListNetworkMigrationDeploymentsCommandInput,
  ListNetworkMigrationDeploymentsCommandOutput,
} from "../commands/ListNetworkMigrationDeploymentsCommand";
import { MgnClient } from "../MgnClient";
import { MgnPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListNetworkMigrationDeployments: (
  config: MgnPaginationConfiguration,
  input: ListNetworkMigrationDeploymentsCommandInput,
  ...rest: any[]
) => Paginator<ListNetworkMigrationDeploymentsCommandOutput> = createPaginator<
  MgnPaginationConfiguration,
  ListNetworkMigrationDeploymentsCommandInput,
  ListNetworkMigrationDeploymentsCommandOutput
>(MgnClient, ListNetworkMigrationDeploymentsCommand, "nextToken", "nextToken", "maxResults");
