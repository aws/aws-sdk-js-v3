// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CleanRoomsClient } from "../CleanRoomsClient";
import {
  ListMembershipsCommand,
  ListMembershipsCommandInput,
  ListMembershipsCommandOutput,
} from "../commands/ListMembershipsCommand";
import { CleanRoomsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMemberships: (
  config: CleanRoomsPaginationConfiguration,
  input: ListMembershipsCommandInput,
  ...rest: any[]
) => Paginator<ListMembershipsCommandOutput> = createPaginator<
  CleanRoomsPaginationConfiguration,
  ListMembershipsCommandInput,
  ListMembershipsCommandOutput
>(CleanRoomsClient, ListMembershipsCommand, "nextToken", "nextToken", "maxResults");
