// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAutonomousDatabaseCharacterSetsCommand,
  ListAutonomousDatabaseCharacterSetsCommandInput,
  ListAutonomousDatabaseCharacterSetsCommandOutput,
} from "../commands/ListAutonomousDatabaseCharacterSetsCommand";
import { OdbClient } from "../OdbClient";
import type { OdbPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAutonomousDatabaseCharacterSets: (
  config: OdbPaginationConfiguration,
  input: ListAutonomousDatabaseCharacterSetsCommandInput,
  ...rest: any[]
) => Paginator<ListAutonomousDatabaseCharacterSetsCommandOutput> = createPaginator<
  OdbPaginationConfiguration,
  ListAutonomousDatabaseCharacterSetsCommandInput,
  ListAutonomousDatabaseCharacterSetsCommandOutput
>(OdbClient, ListAutonomousDatabaseCharacterSetsCommand, "nextToken", "nextToken", "maxResults");
