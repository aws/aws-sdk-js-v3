// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListScopeSnapshotsCommand,
  ListScopeSnapshotsCommandInput,
  ListScopeSnapshotsCommandOutput,
} from "../commands/ListScopeSnapshotsCommand";
import { NetworkSecurityManagerClient } from "../NetworkSecurityManagerClient";
import type { NetworkSecurityManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListScopeSnapshots: (
  config: NetworkSecurityManagerPaginationConfiguration,
  input: ListScopeSnapshotsCommandInput,
  ...rest: any[]
) => Paginator<ListScopeSnapshotsCommandOutput> = createPaginator<
  NetworkSecurityManagerPaginationConfiguration,
  ListScopeSnapshotsCommandInput,
  ListScopeSnapshotsCommandOutput
>(NetworkSecurityManagerClient, ListScopeSnapshotsCommand, "nextToken", "nextToken", "maxResults");
