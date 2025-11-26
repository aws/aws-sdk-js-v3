// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CleanRoomsClient } from "../CleanRoomsClient";
import { ListMembersCommand, ListMembersCommandInput, ListMembersCommandOutput } from "../commands/ListMembersCommand";
import { CleanRoomsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMembers: (
  config: CleanRoomsPaginationConfiguration,
  input: ListMembersCommandInput,
  ...rest: any[]
) => Paginator<ListMembersCommandOutput> = createPaginator<
  CleanRoomsPaginationConfiguration,
  ListMembersCommandInput,
  ListMembersCommandOutput
>(CleanRoomsClient, ListMembersCommand, "nextToken", "nextToken", "maxResults");
