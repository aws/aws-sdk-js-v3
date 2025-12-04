// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CleanRoomsClient } from "../CleanRoomsClient";
import {
  ListConfiguredTableAssociationsCommand,
  ListConfiguredTableAssociationsCommandInput,
  ListConfiguredTableAssociationsCommandOutput,
} from "../commands/ListConfiguredTableAssociationsCommand";
import { CleanRoomsPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListConfiguredTableAssociations: (
  config: CleanRoomsPaginationConfiguration,
  input: ListConfiguredTableAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListConfiguredTableAssociationsCommandOutput> = createPaginator<
  CleanRoomsPaginationConfiguration,
  ListConfiguredTableAssociationsCommandInput,
  ListConfiguredTableAssociationsCommandOutput
>(CleanRoomsClient, ListConfiguredTableAssociationsCommand, "nextToken", "nextToken", "maxResults");
