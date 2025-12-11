// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AppSyncClient } from "../AppSyncClient";
import { ListTypesCommand, ListTypesCommandInput, ListTypesCommandOutput } from "../commands/ListTypesCommand";
import { AppSyncPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTypes: (
  config: AppSyncPaginationConfiguration,
  input: ListTypesCommandInput,
  ...rest: any[]
) => Paginator<ListTypesCommandOutput> = createPaginator<
  AppSyncPaginationConfiguration,
  ListTypesCommandInput,
  ListTypesCommandOutput
>(AppSyncClient, ListTypesCommand, "nextToken", "nextToken", "maxResults");
