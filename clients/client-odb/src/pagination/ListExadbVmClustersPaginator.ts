// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListExadbVmClustersCommand,
  ListExadbVmClustersCommandInput,
  ListExadbVmClustersCommandOutput,
} from "../commands/ListExadbVmClustersCommand";
import { OdbClient } from "../OdbClient";
import type { OdbPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListExadbVmClusters: (
  config: OdbPaginationConfiguration,
  input: ListExadbVmClustersCommandInput,
  ...rest: any[]
) => Paginator<ListExadbVmClustersCommandOutput> = createPaginator<
  OdbPaginationConfiguration,
  ListExadbVmClustersCommandInput,
  ListExadbVmClustersCommandOutput
>(OdbClient, ListExadbVmClustersCommand, "nextToken", "nextToken", "maxResults");
