// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListCloudVmClustersCommand,
  ListCloudVmClustersCommandInput,
  ListCloudVmClustersCommandOutput,
} from "../commands/ListCloudVmClustersCommand";
import { OdbClient } from "../OdbClient";
import { OdbPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListCloudVmClusters: (
  config: OdbPaginationConfiguration,
  input: ListCloudVmClustersCommandInput,
  ...rest: any[]
) => Paginator<ListCloudVmClustersCommandOutput> = createPaginator<
  OdbPaginationConfiguration,
  ListCloudVmClustersCommandInput,
  ListCloudVmClustersCommandOutput
>(OdbClient, ListCloudVmClustersCommand, "nextToken", "nextToken", "maxResults");
