// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AppSyncClient } from "../AppSyncClient";
import {
  ListResolversCommand,
  ListResolversCommandInput,
  ListResolversCommandOutput,
} from "../commands/ListResolversCommand";
import { AppSyncPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResolvers: (
  config: AppSyncPaginationConfiguration,
  input: ListResolversCommandInput,
  ...rest: any[]
) => Paginator<ListResolversCommandOutput> = createPaginator<
  AppSyncPaginationConfiguration,
  ListResolversCommandInput,
  ListResolversCommandOutput
>(AppSyncClient, ListResolversCommand, "nextToken", "nextToken", "maxResults");
