// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAutonomousDatabaseVersionsCommand,
  ListAutonomousDatabaseVersionsCommandInput,
  ListAutonomousDatabaseVersionsCommandOutput,
} from "../commands/ListAutonomousDatabaseVersionsCommand";
import { OdbClient } from "../OdbClient";
import type { OdbPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAutonomousDatabaseVersions: (
  config: OdbPaginationConfiguration,
  input: ListAutonomousDatabaseVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListAutonomousDatabaseVersionsCommandOutput> = createPaginator<
  OdbPaginationConfiguration,
  ListAutonomousDatabaseVersionsCommandInput,
  ListAutonomousDatabaseVersionsCommandOutput
>(OdbClient, ListAutonomousDatabaseVersionsCommand, "nextToken", "nextToken", "maxResults");
