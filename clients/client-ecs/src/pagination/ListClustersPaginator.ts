// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListClustersCommand,
  ListClustersCommandInput,
  ListClustersCommandOutput,
} from "../commands/ListClustersCommand";
import { ECSClient } from "../ECSClient";
import { ECSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListClusters: (
  config: ECSPaginationConfiguration,
  input: ListClustersCommandInput,
  ...rest: any[]
) => Paginator<ListClustersCommandOutput> = createPaginator<
  ECSPaginationConfiguration,
  ListClustersCommandInput,
  ListClustersCommandOutput
>(ECSClient, ListClustersCommand, "nextToken", "nextToken", "maxResults");
