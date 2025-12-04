// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CleanRoomsClient } from "../CleanRoomsClient";
import {
  ListCollaborationsCommand,
  ListCollaborationsCommandInput,
  ListCollaborationsCommandOutput,
} from "../commands/ListCollaborationsCommand";
import { CleanRoomsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCollaborations: (
  config: CleanRoomsPaginationConfiguration,
  input: ListCollaborationsCommandInput,
  ...rest: any[]
) => Paginator<ListCollaborationsCommandOutput> = createPaginator<
  CleanRoomsPaginationConfiguration,
  ListCollaborationsCommandInput,
  ListCollaborationsCommandOutput
>(CleanRoomsClient, ListCollaborationsCommand, "nextToken", "nextToken", "maxResults");
