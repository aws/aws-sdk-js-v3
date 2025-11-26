// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPermissionsCommand,
  ListPermissionsCommandInput,
  ListPermissionsCommandOutput,
} from "../commands/ListPermissionsCommand";
import { GrafanaClient } from "../GrafanaClient";
import { GrafanaPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPermissions: (
  config: GrafanaPaginationConfiguration,
  input: ListPermissionsCommandInput,
  ...rest: any[]
) => Paginator<ListPermissionsCommandOutput> = createPaginator<
  GrafanaPaginationConfiguration,
  ListPermissionsCommandInput,
  ListPermissionsCommandOutput
>(GrafanaClient, ListPermissionsCommand, "nextToken", "nextToken", "maxResults");
