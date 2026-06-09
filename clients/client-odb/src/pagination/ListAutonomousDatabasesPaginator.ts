// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAutonomousDatabasesCommand,
  ListAutonomousDatabasesCommandInput,
  ListAutonomousDatabasesCommandOutput,
} from "../commands/ListAutonomousDatabasesCommand";
import { OdbClient } from "../OdbClient";
import type { OdbPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAutonomousDatabases: (
  config: OdbPaginationConfiguration,
  input: ListAutonomousDatabasesCommandInput,
  ...rest: any[]
) => Paginator<ListAutonomousDatabasesCommandOutput> = createPaginator<
  OdbPaginationConfiguration,
  ListAutonomousDatabasesCommandInput,
  ListAutonomousDatabasesCommandOutput
>(OdbClient, ListAutonomousDatabasesCommand, "nextToken", "nextToken", "maxResults");
