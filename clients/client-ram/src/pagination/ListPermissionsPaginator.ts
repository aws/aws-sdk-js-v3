// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPermissionsCommand,
  ListPermissionsCommandInput,
  ListPermissionsCommandOutput,
} from "../commands/ListPermissionsCommand";
import { RAMClient } from "../RAMClient";
import { RAMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPermissions: (
  config: RAMPaginationConfiguration,
  input: ListPermissionsCommandInput,
  ...rest: any[]
) => Paginator<ListPermissionsCommandOutput> = createPaginator<
  RAMPaginationConfiguration,
  ListPermissionsCommandInput,
  ListPermissionsCommandOutput
>(RAMClient, ListPermissionsCommand, "nextToken", "nextToken", "maxResults");
