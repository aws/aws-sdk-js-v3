// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ChimeClient } from "../ChimeClient";
import {
  ListChannelMembershipsForAppInstanceUserCommand,
  ListChannelMembershipsForAppInstanceUserCommandInput,
  ListChannelMembershipsForAppInstanceUserCommandOutput,
} from "../commands/ListChannelMembershipsForAppInstanceUserCommand";
import { ChimePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListChannelMembershipsForAppInstanceUser: (
  config: ChimePaginationConfiguration,
  input: ListChannelMembershipsForAppInstanceUserCommandInput,
  ...rest: any[]
) => Paginator<ListChannelMembershipsForAppInstanceUserCommandOutput> = createPaginator<
  ChimePaginationConfiguration,
  ListChannelMembershipsForAppInstanceUserCommandInput,
  ListChannelMembershipsForAppInstanceUserCommandOutput
>(ChimeClient, ListChannelMembershipsForAppInstanceUserCommand, "NextToken", "NextToken", "MaxResults");
