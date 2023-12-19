// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ChimeClient } from "../ChimeClient";
import {
  ListChannelModeratorsCommand,
  ListChannelModeratorsCommandInput,
  ListChannelModeratorsCommandOutput,
} from "../commands/ListChannelModeratorsCommand";
import { ChimePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListChannelModerators: (
  config: ChimePaginationConfiguration,
  input: ListChannelModeratorsCommandInput,
  ...rest: any[]
) => Paginator<ListChannelModeratorsCommandOutput> = createPaginator<
  ChimePaginationConfiguration,
  ListChannelModeratorsCommandInput,
  ListChannelModeratorsCommandOutput
>(ChimeClient, ListChannelModeratorsCommand, "NextToken", "NextToken", "MaxResults");
