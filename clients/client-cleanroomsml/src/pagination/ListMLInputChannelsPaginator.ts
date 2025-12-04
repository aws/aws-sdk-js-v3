// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { CleanRoomsMLClient } from "../CleanRoomsMLClient";
import {
  ListMLInputChannelsCommand,
  ListMLInputChannelsCommandInput,
  ListMLInputChannelsCommandOutput,
} from "../commands/ListMLInputChannelsCommand";
import { CleanRoomsMLPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListMLInputChannels: (
  config: CleanRoomsMLPaginationConfiguration,
  input: ListMLInputChannelsCommandInput,
  ...rest: any[]
) => Paginator<ListMLInputChannelsCommandOutput> = createPaginator<
  CleanRoomsMLPaginationConfiguration,
  ListMLInputChannelsCommandInput,
  ListMLInputChannelsCommandOutput
>(CleanRoomsMLClient, ListMLInputChannelsCommand, "nextToken", "nextToken", "maxResults");
