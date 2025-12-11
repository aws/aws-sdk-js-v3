// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AppSyncClient } from "../AppSyncClient";
import { ListApiKeysCommand, ListApiKeysCommandInput, ListApiKeysCommandOutput } from "../commands/ListApiKeysCommand";
import { AppSyncPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListApiKeys: (
  config: AppSyncPaginationConfiguration,
  input: ListApiKeysCommandInput,
  ...rest: any[]
) => Paginator<ListApiKeysCommandOutput> = createPaginator<
  AppSyncPaginationConfiguration,
  ListApiKeysCommandInput,
  ListApiKeysCommandOutput
>(AppSyncClient, ListApiKeysCommand, "nextToken", "nextToken", "maxResults");
