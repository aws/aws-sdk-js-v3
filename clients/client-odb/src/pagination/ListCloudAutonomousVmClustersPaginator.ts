// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListCloudAutonomousVmClustersCommand,
  ListCloudAutonomousVmClustersCommandInput,
  ListCloudAutonomousVmClustersCommandOutput,
} from "../commands/ListCloudAutonomousVmClustersCommand";
import { OdbClient } from "../OdbClient";
import { OdbPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCloudAutonomousVmClusters: (
  config: OdbPaginationConfiguration,
  input: ListCloudAutonomousVmClustersCommandInput,
  ...rest: any[]
) => Paginator<ListCloudAutonomousVmClustersCommandOutput> = createPaginator<
  OdbPaginationConfiguration,
  ListCloudAutonomousVmClustersCommandInput,
  ListCloudAutonomousVmClustersCommandOutput
>(OdbClient, ListCloudAutonomousVmClustersCommand, "nextToken", "nextToken", "maxResults");
