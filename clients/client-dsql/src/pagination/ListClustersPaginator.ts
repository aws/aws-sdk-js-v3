// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListClustersCommand,
  ListClustersCommandInput,
  ListClustersCommandOutput,
} from "../commands/ListClustersCommand";
import { DSQLClient } from "../DSQLClient";
import { DSQLPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListClusters: (
  config: DSQLPaginationConfiguration,
  input: ListClustersCommandInput,
  ...rest: any[]
) => Paginator<ListClustersCommandOutput> = createPaginator<
  DSQLPaginationConfiguration,
  ListClustersCommandInput,
  ListClustersCommandOutput
>(DSQLClient, ListClustersCommand, "nextToken", "nextToken", "maxResults");
