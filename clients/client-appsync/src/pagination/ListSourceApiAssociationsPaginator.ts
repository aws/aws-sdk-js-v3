// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AppSyncClient } from "../AppSyncClient";
import {
  ListSourceApiAssociationsCommand,
  ListSourceApiAssociationsCommandInput,
  ListSourceApiAssociationsCommandOutput,
} from "../commands/ListSourceApiAssociationsCommand";
import { AppSyncPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListSourceApiAssociations: (
  config: AppSyncPaginationConfiguration,
  input: ListSourceApiAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListSourceApiAssociationsCommandOutput> = createPaginator<
  AppSyncPaginationConfiguration,
  ListSourceApiAssociationsCommandInput,
  ListSourceApiAssociationsCommandOutput
>(AppSyncClient, ListSourceApiAssociationsCommand, "nextToken", "nextToken", "maxResults");
