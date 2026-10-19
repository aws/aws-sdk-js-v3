// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDeploymentSnapshotsCommand,
  ListDeploymentSnapshotsCommandInput,
  ListDeploymentSnapshotsCommandOutput,
} from "../commands/ListDeploymentSnapshotsCommand";
import { NetworkSecurityManagerClient } from "../NetworkSecurityManagerClient";
import type { NetworkSecurityManagerPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDeploymentSnapshots: (
  config: NetworkSecurityManagerPaginationConfiguration,
  input: ListDeploymentSnapshotsCommandInput,
  ...rest: any[]
) => Paginator<ListDeploymentSnapshotsCommandOutput> = createPaginator<
  NetworkSecurityManagerPaginationConfiguration,
  ListDeploymentSnapshotsCommandInput,
  ListDeploymentSnapshotsCommandOutput
>(NetworkSecurityManagerClient, ListDeploymentSnapshotsCommand, "nextToken", "nextToken", "maxResults");
