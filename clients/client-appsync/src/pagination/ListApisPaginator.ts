// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AppSyncClient } from "../AppSyncClient";
import { ListApisCommand, ListApisCommandInput, ListApisCommandOutput } from "../commands/ListApisCommand";
import { AppSyncPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListApis: (
  config: AppSyncPaginationConfiguration,
  input: ListApisCommandInput,
  ...rest: any[]
) => Paginator<ListApisCommandOutput> = createPaginator<
  AppSyncPaginationConfiguration,
  ListApisCommandInput,
  ListApisCommandOutput
>(AppSyncClient, ListApisCommand, "nextToken", "nextToken", "maxResults");
