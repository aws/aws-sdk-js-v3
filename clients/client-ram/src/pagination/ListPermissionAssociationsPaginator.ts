// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPermissionAssociationsCommand,
  ListPermissionAssociationsCommandInput,
  ListPermissionAssociationsCommandOutput,
} from "../commands/ListPermissionAssociationsCommand";
import { RAMClient } from "../RAMClient";
import { RAMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPermissionAssociations: (
  config: RAMPaginationConfiguration,
  input: ListPermissionAssociationsCommandInput,
  ...rest: any[]
) => Paginator<ListPermissionAssociationsCommandOutput> = createPaginator<
  RAMPaginationConfiguration,
  ListPermissionAssociationsCommandInput,
  ListPermissionAssociationsCommandOutput
>(RAMClient, ListPermissionAssociationsCommand, "nextToken", "nextToken", "maxResults");
