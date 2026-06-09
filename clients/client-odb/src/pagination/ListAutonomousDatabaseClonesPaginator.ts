// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAutonomousDatabaseClonesCommand,
  ListAutonomousDatabaseClonesCommandInput,
  ListAutonomousDatabaseClonesCommandOutput,
} from "../commands/ListAutonomousDatabaseClonesCommand";
import { OdbClient } from "../OdbClient";
import type { OdbPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAutonomousDatabaseClones: (
  config: OdbPaginationConfiguration,
  input: ListAutonomousDatabaseClonesCommandInput,
  ...rest: any[]
) => Paginator<ListAutonomousDatabaseClonesCommandOutput> = createPaginator<
  OdbPaginationConfiguration,
  ListAutonomousDatabaseClonesCommandInput,
  ListAutonomousDatabaseClonesCommandOutput
>(OdbClient, ListAutonomousDatabaseClonesCommand, "nextToken", "nextToken", "maxResults");
