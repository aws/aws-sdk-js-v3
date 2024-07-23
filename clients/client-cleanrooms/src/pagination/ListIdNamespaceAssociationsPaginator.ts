// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { CleanRoomsClient } from "../CleanRoomsClient";
import {
  ListIdNamespaceAssociationsCommand,
  ListIdNamespaceAssociationsCommandInput,
  ListIdNamespaceAssociationsCommandOutput,
} from "../commands/ListIdNamespaceAssociationsCommand";
import { CleanRoomsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListIdNamespaceAssociations: (
  config: CleanRoomsPaginationConfiguration,
  input: ListIdNamespaceAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListIdNamespaceAssociationsCommandOutput> = createPaginator<
  CleanRoomsPaginationConfiguration,
  ListIdNamespaceAssociationsCommandInput,
  ListIdNamespaceAssociationsCommandOutput
>(CleanRoomsClient, ListIdNamespaceAssociationsCommand, "nextToken", "nextToken", "maxResults");
