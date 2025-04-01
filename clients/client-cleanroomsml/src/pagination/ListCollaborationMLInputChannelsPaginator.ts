// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { CleanRoomsMLClient } from "../CleanRoomsMLClient";
import {
  ListCollaborationMLInputChannelsCommand,
  ListCollaborationMLInputChannelsCommandInput,
  ListCollaborationMLInputChannelsCommandOutput,
} from "../commands/ListCollaborationMLInputChannelsCommand";
import { CleanRoomsMLPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCollaborationMLInputChannels: (
  config: CleanRoomsMLPaginationConfiguration,
  input: ListCollaborationMLInputChannelsCommandInput,
  ...rest: any[]
) => Paginator<ListCollaborationMLInputChannelsCommandOutput> = createPaginator<
  CleanRoomsMLPaginationConfiguration,
  ListCollaborationMLInputChannelsCommandInput,
  ListCollaborationMLInputChannelsCommandOutput
>(CleanRoomsMLClient, ListCollaborationMLInputChannelsCommand, "nextToken", "nextToken", "maxResults");
