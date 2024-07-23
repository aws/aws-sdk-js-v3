// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { AppSyncClient } from "../AppSyncClient";
import {
  ListGraphqlApisCommand,
  ListGraphqlApisCommandInput,
  ListGraphqlApisCommandOutput,
} from "../commands/ListGraphqlApisCommand";
import { AppSyncPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListGraphqlApis: (
  config: AppSyncPaginationConfiguration,
  input: ListGraphqlApisCommandInput,
  ...rest: any[]
) => Paginator<ListGraphqlApisCommandOutput> = createPaginator<
  AppSyncPaginationConfiguration,
  ListGraphqlApisCommandInput,
  ListGraphqlApisCommandOutput
>(AppSyncClient, ListGraphqlApisCommand, "nextToken", "nextToken", "maxResults");
