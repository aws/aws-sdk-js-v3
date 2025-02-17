// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ListDbClustersCommand,
  ListDbClustersCommandInput,
  ListDbClustersCommandOutput,
} from "../commands/ListDbClustersCommand";
import { TimestreamInfluxDBClient } from "../TimestreamInfluxDBClient";
import { TimestreamInfluxDBPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDbClusters: (
  config: TimestreamInfluxDBPaginationConfiguration,
  input: ListDbClustersCommandInput,
  ...rest: any[]
) => Paginator<ListDbClustersCommandOutput> = createPaginator<
  TimestreamInfluxDBPaginationConfiguration,
  ListDbClustersCommandInput,
  ListDbClustersCommandOutput
>(TimestreamInfluxDBClient, ListDbClustersCommand, "nextToken", "nextToken", "maxResults");
