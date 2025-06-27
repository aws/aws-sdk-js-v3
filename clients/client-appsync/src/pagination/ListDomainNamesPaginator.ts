// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import { AppSyncClient } from "../AppSyncClient";
import {
  ListDomainNamesCommand,
  ListDomainNamesCommandInput,
  ListDomainNamesCommandOutput,
} from "../commands/ListDomainNamesCommand";
import { AppSyncPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDomainNames: (
  config: AppSyncPaginationConfiguration,
  input: ListDomainNamesCommandInput,
  ...rest: any[]
) => Paginator<ListDomainNamesCommandOutput> = createPaginator<
  AppSyncPaginationConfiguration,
  ListDomainNamesCommandInput,
  ListDomainNamesCommandOutput
>(AppSyncClient, ListDomainNamesCommand, "nextToken", "nextToken", "maxResults");
