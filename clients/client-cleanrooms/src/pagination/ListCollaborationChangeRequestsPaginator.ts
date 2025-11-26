// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CleanRoomsClient } from "../CleanRoomsClient";
import {
  ListCollaborationChangeRequestsCommand,
  ListCollaborationChangeRequestsCommandInput,
  ListCollaborationChangeRequestsCommandOutput,
} from "../commands/ListCollaborationChangeRequestsCommand";
import { CleanRoomsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCollaborationChangeRequests: (
  config: CleanRoomsPaginationConfiguration,
  input: ListCollaborationChangeRequestsCommandInput,
  ...rest: any[]
) => Paginator<ListCollaborationChangeRequestsCommandOutput> = createPaginator<
  CleanRoomsPaginationConfiguration,
  ListCollaborationChangeRequestsCommandInput,
  ListCollaborationChangeRequestsCommandOutput
>(CleanRoomsClient, ListCollaborationChangeRequestsCommand, "nextToken", "nextToken", "maxResults");
