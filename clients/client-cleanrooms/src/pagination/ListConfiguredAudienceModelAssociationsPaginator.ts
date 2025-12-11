// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CleanRoomsClient } from "../CleanRoomsClient";
import {
  ListConfiguredAudienceModelAssociationsCommand,
  ListConfiguredAudienceModelAssociationsCommandInput,
  ListConfiguredAudienceModelAssociationsCommandOutput,
} from "../commands/ListConfiguredAudienceModelAssociationsCommand";
import { CleanRoomsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListConfiguredAudienceModelAssociations: (
  config: CleanRoomsPaginationConfiguration,
  input: ListConfiguredAudienceModelAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListConfiguredAudienceModelAssociationsCommandOutput> = createPaginator<
  CleanRoomsPaginationConfiguration,
  ListConfiguredAudienceModelAssociationsCommandInput,
  ListConfiguredAudienceModelAssociationsCommandOutput
>(CleanRoomsClient, ListConfiguredAudienceModelAssociationsCommand, "nextToken", "nextToken", "maxResults");
