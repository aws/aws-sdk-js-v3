// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ChimeSDKMessagingClient } from "../ChimeSDKMessagingClient";
import {
  ListChannelBansCommand,
  ListChannelBansCommandInput,
  ListChannelBansCommandOutput,
} from "../commands/ListChannelBansCommand";
import { ChimeSDKMessagingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListChannelBans: (
  config: ChimeSDKMessagingPaginationConfiguration,
  input: ListChannelBansCommandInput,
  ...rest: any[]
) => Paginator<ListChannelBansCommandOutput> = createPaginator<
  ChimeSDKMessagingPaginationConfiguration,
  ListChannelBansCommandInput,
  ListChannelBansCommandOutput
>(ChimeSDKMessagingClient, ListChannelBansCommand, "NextToken", "NextToken", "MaxResults");
