// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CleanRoomsClient } from "../CleanRoomsClient";
import {
  ListConfiguredTablesCommand,
  ListConfiguredTablesCommandInput,
  ListConfiguredTablesCommandOutput,
} from "../commands/ListConfiguredTablesCommand";
import { CleanRoomsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListConfiguredTables: (
  config: CleanRoomsPaginationConfiguration,
  input: ListConfiguredTablesCommandInput,
  ...rest: any[]
) => Paginator<ListConfiguredTablesCommandOutput> = createPaginator<
  CleanRoomsPaginationConfiguration,
  ListConfiguredTablesCommandInput,
  ListConfiguredTablesCommandOutput
>(CleanRoomsClient, ListConfiguredTablesCommand, "nextToken", "nextToken", "maxResults");
