// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CleanRoomsClient } from "../CleanRoomsClient";
import {
  ListIdMappingTablesCommand,
  ListIdMappingTablesCommandInput,
  ListIdMappingTablesCommandOutput,
} from "../commands/ListIdMappingTablesCommand";
import { CleanRoomsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListIdMappingTables: (
  config: CleanRoomsPaginationConfiguration,
  input: ListIdMappingTablesCommandInput,
  ...rest: any[]
) => Paginator<ListIdMappingTablesCommandOutput> = createPaginator<
  CleanRoomsPaginationConfiguration,
  ListIdMappingTablesCommandInput,
  ListIdMappingTablesCommandOutput
>(CleanRoomsClient, ListIdMappingTablesCommand, "nextToken", "nextToken", "maxResults");
