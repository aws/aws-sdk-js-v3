// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ChimeClient } from "../ChimeClient";
import { ListRoomsCommand, ListRoomsCommandInput, ListRoomsCommandOutput } from "../commands/ListRoomsCommand";
import { ChimePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRooms: (
  config: ChimePaginationConfiguration,
  input: ListRoomsCommandInput,
  ...rest: any[]
) => Paginator<ListRoomsCommandOutput> = createPaginator<
  ChimePaginationConfiguration,
  ListRoomsCommandInput,
  ListRoomsCommandOutput
>(ChimeClient, ListRoomsCommand, "NextToken", "NextToken", "MaxResults");
