// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { ChimeClient } from "../ChimeClient";
import {
  ListChannelMessagesCommand,
  ListChannelMessagesCommandInput,
  ListChannelMessagesCommandOutput,
} from "../commands/ListChannelMessagesCommand";
import { ChimePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListChannelMessages: (
  config: ChimePaginationConfiguration,
  input: ListChannelMessagesCommandInput,
  ...rest: any[]
) => Paginator<ListChannelMessagesCommandOutput> = createPaginator<
  ChimePaginationConfiguration,
  ListChannelMessagesCommandInput,
  ListChannelMessagesCommandOutput
>(ChimeClient, ListChannelMessagesCommand, "NextToken", "NextToken", "MaxResults");
