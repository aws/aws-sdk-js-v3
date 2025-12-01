// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ChimeSDKMessagingClient } from "../ChimeSDKMessagingClient";
import {
  ListChannelMembershipsCommand,
  ListChannelMembershipsCommandInput,
  ListChannelMembershipsCommandOutput,
} from "../commands/ListChannelMembershipsCommand";
import { ChimeSDKMessagingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListChannelMemberships: (
  config: ChimeSDKMessagingPaginationConfiguration,
  input: ListChannelMembershipsCommandInput,
  ...rest: any[]
) => Paginator<ListChannelMembershipsCommandOutput> = createPaginator<
  ChimeSDKMessagingPaginationConfiguration,
  ListChannelMembershipsCommandInput,
  ListChannelMembershipsCommandOutput
>(ChimeSDKMessagingClient, ListChannelMembershipsCommand, "NextToken", "NextToken", "MaxResults");
