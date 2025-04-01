// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListClustersCommand,
  ListClustersCommandInput,
  ListClustersCommandOutput,
} from "../commands/ListClustersCommand";
import { PCSClient } from "../PCSClient";
import { PCSPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListClusters: (
  config: PCSPaginationConfiguration,
  input: ListClustersCommandInput,
  ...rest: any[]
) => Paginator<ListClustersCommandOutput> = createPaginator<
  PCSPaginationConfiguration,
  ListClustersCommandInput,
  ListClustersCommandOutput
>(PCSClient, ListClustersCommand, "nextToken", "nextToken", "maxResults");
