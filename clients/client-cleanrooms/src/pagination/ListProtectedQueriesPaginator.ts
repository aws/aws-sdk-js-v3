// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CleanRoomsClient } from "../CleanRoomsClient";
import {
  ListProtectedQueriesCommand,
  ListProtectedQueriesCommandInput,
  ListProtectedQueriesCommandOutput,
} from "../commands/ListProtectedQueriesCommand";
import { CleanRoomsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListProtectedQueries: (
  config: CleanRoomsPaginationConfiguration,
  input: ListProtectedQueriesCommandInput,
  ...rest: any[]
) => Paginator<ListProtectedQueriesCommandOutput> = createPaginator<
  CleanRoomsPaginationConfiguration,
  ListProtectedQueriesCommandInput,
  ListProtectedQueriesCommandOutput
>(CleanRoomsClient, ListProtectedQueriesCommand, "nextToken", "nextToken", "maxResults");
