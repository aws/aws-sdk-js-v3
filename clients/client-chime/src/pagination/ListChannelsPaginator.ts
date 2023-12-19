// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ChimeClient } from "../ChimeClient";
import {
  ListChannelsCommand,
  ListChannelsCommandInput,
  ListChannelsCommandOutput,
} from "../commands/ListChannelsCommand";
import { ChimePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListChannels: (
  config: ChimePaginationConfiguration,
  input: ListChannelsCommandInput,
  ...rest: any[]
) => Paginator<ListChannelsCommandOutput> = createPaginator<
  ChimePaginationConfiguration,
  ListChannelsCommandInput,
  ListChannelsCommandOutput
>(ChimeClient, ListChannelsCommand, "NextToken", "NextToken", "MaxResults");
