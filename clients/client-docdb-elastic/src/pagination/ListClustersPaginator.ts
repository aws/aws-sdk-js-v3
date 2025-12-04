// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListClustersCommand,
  ListClustersCommandInput,
  ListClustersCommandOutput,
} from "../commands/ListClustersCommand";
import { DocDBElasticClient } from "../DocDBElasticClient";
import { DocDBElasticPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListClusters: (
  config: DocDBElasticPaginationConfiguration,
  input: ListClustersCommandInput,
  ...rest: any[]
) => Paginator<ListClustersCommandOutput> = createPaginator<
  DocDBElasticPaginationConfiguration,
  ListClustersCommandInput,
  ListClustersCommandOutput
>(DocDBElasticClient, ListClustersCommand, "nextToken", "nextToken", "maxResults");
