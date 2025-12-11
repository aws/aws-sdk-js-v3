// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ListRoomsCommand, ListRoomsCommandInput, ListRoomsCommandOutput } from "../commands/ListRoomsCommand";
import { IvschatClient } from "../IvschatClient";
import { IvschatPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRooms: (
  config: IvschatPaginationConfiguration,
  input: ListRoomsCommandInput,
  ...rest: any[]
) => Paginator<ListRoomsCommandOutput> = createPaginator<
  IvschatPaginationConfiguration,
  ListRoomsCommandInput,
  ListRoomsCommandOutput
>(IvschatClient, ListRoomsCommand, "nextToken", "nextToken", "maxResults");
