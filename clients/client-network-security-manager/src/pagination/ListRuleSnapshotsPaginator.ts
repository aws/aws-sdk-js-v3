// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListRuleSnapshotsCommand,
  ListRuleSnapshotsCommandInput,
  ListRuleSnapshotsCommandOutput,
} from "../commands/ListRuleSnapshotsCommand";
import { NetworkSecurityManagerClient } from "../NetworkSecurityManagerClient";
import type { NetworkSecurityManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListRuleSnapshots: (
  config: NetworkSecurityManagerPaginationConfiguration,
  input: ListRuleSnapshotsCommandInput,
  ...rest: any[]
) => Paginator<ListRuleSnapshotsCommandOutput> = createPaginator<
  NetworkSecurityManagerPaginationConfiguration,
  ListRuleSnapshotsCommandInput,
  ListRuleSnapshotsCommandOutput
>(NetworkSecurityManagerClient, ListRuleSnapshotsCommand, "nextToken", "nextToken", "maxResults");
