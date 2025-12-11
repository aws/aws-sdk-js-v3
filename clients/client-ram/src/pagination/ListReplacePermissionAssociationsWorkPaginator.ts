// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListReplacePermissionAssociationsWorkCommand,
  ListReplacePermissionAssociationsWorkCommandInput,
  ListReplacePermissionAssociationsWorkCommandOutput,
} from "../commands/ListReplacePermissionAssociationsWorkCommand";
import { RAMClient } from "../RAMClient";
import { RAMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListReplacePermissionAssociationsWork: (
  config: RAMPaginationConfiguration,
  input: ListReplacePermissionAssociationsWorkCommandInput,
  ...rest: any[]
) => Paginator<ListReplacePermissionAssociationsWorkCommandOutput> = createPaginator<
  RAMPaginationConfiguration,
  ListReplacePermissionAssociationsWorkCommandInput,
  ListReplacePermissionAssociationsWorkCommandOutput
>(RAMClient, ListReplacePermissionAssociationsWorkCommand, "nextToken", "nextToken", "maxResults");
