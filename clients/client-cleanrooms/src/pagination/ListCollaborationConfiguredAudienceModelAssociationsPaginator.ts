// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CleanRoomsClient } from "../CleanRoomsClient";
import {
  ListCollaborationConfiguredAudienceModelAssociationsCommand,
  ListCollaborationConfiguredAudienceModelAssociationsCommandInput,
  ListCollaborationConfiguredAudienceModelAssociationsCommandOutput,
} from "../commands/ListCollaborationConfiguredAudienceModelAssociationsCommand";
import { CleanRoomsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCollaborationConfiguredAudienceModelAssociations: (
  config: CleanRoomsPaginationConfiguration,
  input: ListCollaborationConfiguredAudienceModelAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListCollaborationConfiguredAudienceModelAssociationsCommandOutput> = createPaginator<
  CleanRoomsPaginationConfiguration,
  ListCollaborationConfiguredAudienceModelAssociationsCommandInput,
  ListCollaborationConfiguredAudienceModelAssociationsCommandOutput
>(CleanRoomsClient, ListCollaborationConfiguredAudienceModelAssociationsCommand, "nextToken", "nextToken", "maxResults");
