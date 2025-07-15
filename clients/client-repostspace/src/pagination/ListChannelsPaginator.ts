// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListChannelsCommand,
  ListChannelsCommandInput,
  ListChannelsCommandOutput,
} from "../commands/ListChannelsCommand";
import { RepostspaceClient } from "../RepostspaceClient";
import { RepostspacePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListChannels: (
  config: RepostspacePaginationConfiguration,
  input: ListChannelsCommandInput,
  ...rest: any[]
) => Paginator<ListChannelsCommandOutput> = createPaginator<
  RepostspacePaginationConfiguration,
  ListChannelsCommandInput,
  ListChannelsCommandOutput
>(RepostspaceClient, ListChannelsCommand, "nextToken", "nextToken", "maxResults");
