// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ChimeClient } from "../ChimeClient";
import {
  ListChannelMembershipsCommand,
  ListChannelMembershipsCommandInput,
  ListChannelMembershipsCommandOutput,
} from "../commands/ListChannelMembershipsCommand";
import { ChimePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListChannelMemberships: (
  config: ChimePaginationConfiguration,
  input: ListChannelMembershipsCommandInput,
  ...rest: any[]
) => Paginator<ListChannelMembershipsCommandOutput> = createPaginator<
  ChimePaginationConfiguration,
  ListChannelMembershipsCommandInput,
  ListChannelMembershipsCommandOutput
>(ChimeClient, ListChannelMembershipsCommand, "NextToken", "NextToken", "MaxResults");
