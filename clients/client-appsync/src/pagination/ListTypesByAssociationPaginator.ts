// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import { AppSyncClient } from "../AppSyncClient";
import {
  ListTypesByAssociationCommand,
  ListTypesByAssociationCommandInput,
  ListTypesByAssociationCommandOutput,
} from "../commands/ListTypesByAssociationCommand";
import { AppSyncPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTypesByAssociation: (
  config: AppSyncPaginationConfiguration,
  input: ListTypesByAssociationCommandInput,
  ...rest: any[]
) => Paginator<ListTypesByAssociationCommandOutput> = createPaginator<
  AppSyncPaginationConfiguration,
  ListTypesByAssociationCommandInput,
  ListTypesByAssociationCommandOutput
>(AppSyncClient, ListTypesByAssociationCommand, "nextToken", "nextToken", "maxResults");
