// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { ChimeSDKMessagingClient } from "../ChimeSDKMessagingClient";
import {
  ListChannelMembershipsForAppInstanceUserCommand,
  ListChannelMembershipsForAppInstanceUserCommandInput,
  ListChannelMembershipsForAppInstanceUserCommandOutput,
} from "../commands/ListChannelMembershipsForAppInstanceUserCommand";
import { ChimeSDKMessagingPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListChannelMembershipsForAppInstanceUser: (
  config: ChimeSDKMessagingPaginationConfiguration,
  input: ListChannelMembershipsForAppInstanceUserCommandInput,
  ...rest: any[]
) => Paginator<ListChannelMembershipsForAppInstanceUserCommandOutput> = createPaginator<
  ChimeSDKMessagingPaginationConfiguration,
  ListChannelMembershipsForAppInstanceUserCommandInput,
  ListChannelMembershipsForAppInstanceUserCommandOutput
>(ChimeSDKMessagingClient, ListChannelMembershipsForAppInstanceUserCommand, "NextToken", "NextToken", "MaxResults");
