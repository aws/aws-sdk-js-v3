// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CleanRoomsClient } from "../CleanRoomsClient";
import {
  ListCollaborationIdNamespaceAssociationsCommand,
  ListCollaborationIdNamespaceAssociationsCommandInput,
  ListCollaborationIdNamespaceAssociationsCommandOutput,
} from "../commands/ListCollaborationIdNamespaceAssociationsCommand";
import { CleanRoomsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCollaborationIdNamespaceAssociations: (
  config: CleanRoomsPaginationConfiguration,
  input: ListCollaborationIdNamespaceAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListCollaborationIdNamespaceAssociationsCommandOutput> = createPaginator<
  CleanRoomsPaginationConfiguration,
  ListCollaborationIdNamespaceAssociationsCommandInput,
  ListCollaborationIdNamespaceAssociationsCommandOutput
>(CleanRoomsClient, ListCollaborationIdNamespaceAssociationsCommand, "nextToken", "nextToken", "maxResults");
