// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AppSyncClient } from "../AppSyncClient";
import {
  ListDataSourcesCommand,
  ListDataSourcesCommandInput,
  ListDataSourcesCommandOutput,
} from "../commands/ListDataSourcesCommand";
import { AppSyncPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDataSources: (
  config: AppSyncPaginationConfiguration,
  input: ListDataSourcesCommandInput,
  ...rest: any[]
) => Paginator<ListDataSourcesCommandOutput> = createPaginator<
  AppSyncPaginationConfiguration,
  ListDataSourcesCommandInput,
  ListDataSourcesCommandOutput
>(AppSyncClient, ListDataSourcesCommand, "nextToken", "nextToken", "maxResults");
