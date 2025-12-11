// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListResourceSharePermissionsCommand,
  ListResourceSharePermissionsCommandInput,
  ListResourceSharePermissionsCommandOutput,
} from "../commands/ListResourceSharePermissionsCommand";
import { RAMClient } from "../RAMClient";
import { RAMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListResourceSharePermissions: (
  config: RAMPaginationConfiguration,
  input: ListResourceSharePermissionsCommandInput,
  ...rest: any[]
) => Paginator<ListResourceSharePermissionsCommandOutput> = createPaginator<
  RAMPaginationConfiguration,
  ListResourceSharePermissionsCommandInput,
  ListResourceSharePermissionsCommandOutput
>(RAMClient, ListResourceSharePermissionsCommand, "nextToken", "nextToken", "maxResults");
