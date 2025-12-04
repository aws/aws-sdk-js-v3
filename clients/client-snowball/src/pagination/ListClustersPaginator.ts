// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListClustersCommand,
  ListClustersCommandInput,
  ListClustersCommandOutput,
} from "../commands/ListClustersCommand";
import { SnowballClient } from "../SnowballClient";
import { SnowballPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListClusters: (
  config: SnowballPaginationConfiguration,
  input: ListClustersCommandInput,
  ...rest: any[]
) => Paginator<ListClustersCommandOutput> = createPaginator<
  SnowballPaginationConfiguration,
  ListClustersCommandInput,
  ListClustersCommandOutput
>(SnowballClient, ListClustersCommand, "NextToken", "NextToken", "MaxResults");
