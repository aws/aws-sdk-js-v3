// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AppSyncClient } from "../AppSyncClient";
import {
  ListFunctionsCommand,
  ListFunctionsCommandInput,
  ListFunctionsCommandOutput,
} from "../commands/ListFunctionsCommand";
import { AppSyncPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListFunctions: (
  config: AppSyncPaginationConfiguration,
  input: ListFunctionsCommandInput,
  ...rest: any[]
) => Paginator<ListFunctionsCommandOutput> = createPaginator<
  AppSyncPaginationConfiguration,
  ListFunctionsCommandInput,
  ListFunctionsCommandOutput
>(AppSyncClient, ListFunctionsCommand, "nextToken", "nextToken", "maxResults");
