// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CleanRoomsClient } from "../CleanRoomsClient";
import {
  ListIntermediateTablesCommand,
  ListIntermediateTablesCommandInput,
  ListIntermediateTablesCommandOutput,
} from "../commands/ListIntermediateTablesCommand";
import type { CleanRoomsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListIntermediateTables: (
  config: CleanRoomsPaginationConfiguration,
  input: ListIntermediateTablesCommandInput,
  ...rest: any[]
) => Paginator<ListIntermediateTablesCommandOutput> = createPaginator<
  CleanRoomsPaginationConfiguration,
  ListIntermediateTablesCommandInput,
  ListIntermediateTablesCommandOutput
>(CleanRoomsClient, ListIntermediateTablesCommand, "nextToken", "nextToken", "maxResults");
