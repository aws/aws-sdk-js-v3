// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAutonomousDatabaseRefreshableClonesCommand,
  ListAutonomousDatabaseRefreshableClonesCommandInput,
  ListAutonomousDatabaseRefreshableClonesCommandOutput,
} from "../commands/ListAutonomousDatabaseRefreshableClonesCommand";
import { OdbClient } from "../OdbClient";
import type { OdbPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAutonomousDatabaseRefreshableClones: (
  config: OdbPaginationConfiguration,
  input: ListAutonomousDatabaseRefreshableClonesCommandInput,
  ...rest: any[]
) => Paginator<ListAutonomousDatabaseRefreshableClonesCommandOutput> = createPaginator<
  OdbPaginationConfiguration,
  ListAutonomousDatabaseRefreshableClonesCommandInput,
  ListAutonomousDatabaseRefreshableClonesCommandOutput
>(OdbClient, ListAutonomousDatabaseRefreshableClonesCommand, "nextToken", "nextToken", "maxResults");
