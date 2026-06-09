// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAutonomousDatabaseBackupsCommand,
  ListAutonomousDatabaseBackupsCommandInput,
  ListAutonomousDatabaseBackupsCommandOutput,
} from "../commands/ListAutonomousDatabaseBackupsCommand";
import { OdbClient } from "../OdbClient";
import type { OdbPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAutonomousDatabaseBackups: (
  config: OdbPaginationConfiguration,
  input: ListAutonomousDatabaseBackupsCommandInput,
  ...rest: any[]
) => Paginator<ListAutonomousDatabaseBackupsCommandOutput> = createPaginator<
  OdbPaginationConfiguration,
  ListAutonomousDatabaseBackupsCommandInput,
  ListAutonomousDatabaseBackupsCommandOutput
>(OdbClient, ListAutonomousDatabaseBackupsCommand, "nextToken", "nextToken", "maxResults");
