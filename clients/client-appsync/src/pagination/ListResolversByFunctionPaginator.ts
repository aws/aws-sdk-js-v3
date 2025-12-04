// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AppSyncClient } from "../AppSyncClient";
import {
  ListResolversByFunctionCommand,
  ListResolversByFunctionCommandInput,
  ListResolversByFunctionCommandOutput,
} from "../commands/ListResolversByFunctionCommand";
import { AppSyncPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResolversByFunction: (
  config: AppSyncPaginationConfiguration,
  input: ListResolversByFunctionCommandInput,
  ...rest: any[]
) => Paginator<ListResolversByFunctionCommandOutput> = createPaginator<
  AppSyncPaginationConfiguration,
  ListResolversByFunctionCommandInput,
  ListResolversByFunctionCommandOutput
>(AppSyncClient, ListResolversByFunctionCommand, "nextToken", "nextToken", "maxResults");
