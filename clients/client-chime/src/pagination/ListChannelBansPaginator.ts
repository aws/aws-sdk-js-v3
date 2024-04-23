// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ChimeClient } from "../ChimeClient";
import {
  ListChannelBansCommand,
  ListChannelBansCommandInput,
  ListChannelBansCommandOutput,
} from "../commands/ListChannelBansCommand";
import { ChimePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListChannelBans: (
  config: ChimePaginationConfiguration,
  input: ListChannelBansCommandInput,
  ...rest: any[]
) => Paginator<ListChannelBansCommandOutput> = createPaginator<
  ChimePaginationConfiguration,
  ListChannelBansCommandInput,
  ListChannelBansCommandOutput
>(ChimeClient, ListChannelBansCommand, "NextToken", "NextToken", "MaxResults");
