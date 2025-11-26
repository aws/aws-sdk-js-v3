// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListClustersCommand,
  ListClustersCommandInput,
  ListClustersCommandOutput,
} from "../commands/ListClustersCommand";
import { EMRClient } from "../EMRClient";
import { EMRPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListClusters: (
  config: EMRPaginationConfiguration,
  input: ListClustersCommandInput,
  ...rest: any[]
) => Paginator<ListClustersCommandOutput> = createPaginator<
  EMRPaginationConfiguration,
  ListClustersCommandInput,
  ListClustersCommandOutput
>(EMRClient, ListClustersCommand, "Marker", "Marker", "");
