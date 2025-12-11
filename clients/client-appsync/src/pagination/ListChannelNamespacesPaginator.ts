// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AppSyncClient } from "../AppSyncClient";
import {
  ListChannelNamespacesCommand,
  ListChannelNamespacesCommandInput,
  ListChannelNamespacesCommandOutput,
} from "../commands/ListChannelNamespacesCommand";
import { AppSyncPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListChannelNamespaces: (
  config: AppSyncPaginationConfiguration,
  input: ListChannelNamespacesCommandInput,
  ...rest: any[]
) => Paginator<ListChannelNamespacesCommandOutput> = createPaginator<
  AppSyncPaginationConfiguration,
  ListChannelNamespacesCommandInput,
  ListChannelNamespacesCommandOutput
>(AppSyncClient, ListChannelNamespacesCommand, "nextToken", "nextToken", "maxResults");
