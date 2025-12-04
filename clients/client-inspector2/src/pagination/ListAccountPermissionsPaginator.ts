// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListAccountPermissionsCommand,
  ListAccountPermissionsCommandInput,
  ListAccountPermissionsCommandOutput,
} from "../commands/ListAccountPermissionsCommand";
import { Inspector2Client } from "../Inspector2Client";
import { Inspector2PaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListAccountPermissions: (
  config: Inspector2PaginationConfiguration,
  input: ListAccountPermissionsCommandInput,
  ...rest: any[]
) => Paginator<ListAccountPermissionsCommandOutput> = createPaginator<
  Inspector2PaginationConfiguration,
  ListAccountPermissionsCommandInput,
  ListAccountPermissionsCommandOutput
>(Inspector2Client, ListAccountPermissionsCommand, "nextToken", "nextToken", "maxResults");
