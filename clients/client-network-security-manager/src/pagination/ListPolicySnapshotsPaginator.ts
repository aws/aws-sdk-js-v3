// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListPolicySnapshotsCommand,
  ListPolicySnapshotsCommandInput,
  ListPolicySnapshotsCommandOutput,
} from "../commands/ListPolicySnapshotsCommand";
import { NetworkSecurityManagerClient } from "../NetworkSecurityManagerClient";
import type { NetworkSecurityManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListPolicySnapshots: (
  config: NetworkSecurityManagerPaginationConfiguration,
  input: ListPolicySnapshotsCommandInput,
  ...rest: any[]
) => Paginator<ListPolicySnapshotsCommandOutput> = createPaginator<
  NetworkSecurityManagerPaginationConfiguration,
  ListPolicySnapshotsCommandInput,
  ListPolicySnapshotsCommandOutput
>(NetworkSecurityManagerClient, ListPolicySnapshotsCommand, "nextToken", "nextToken", "maxResults");
