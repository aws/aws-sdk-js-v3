// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPermissionVersionsCommand,
  ListPermissionVersionsCommandInput,
  ListPermissionVersionsCommandOutput,
} from "../commands/ListPermissionVersionsCommand";
import { RAMClient } from "../RAMClient";
import { RAMPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPermissionVersions: (
  config: RAMPaginationConfiguration,
  input: ListPermissionVersionsCommandInput,
  ...rest: any[]
) => Paginator<ListPermissionVersionsCommandOutput> = createPaginator<
  RAMPaginationConfiguration,
  ListPermissionVersionsCommandInput,
  ListPermissionVersionsCommandOutput
>(RAMClient, ListPermissionVersionsCommand, "nextToken", "nextToken", "maxResults");
