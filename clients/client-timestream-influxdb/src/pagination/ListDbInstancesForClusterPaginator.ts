// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDbInstancesForClusterCommand,
  ListDbInstancesForClusterCommandInput,
  ListDbInstancesForClusterCommandOutput,
} from "../commands/ListDbInstancesForClusterCommand";
import { TimestreamInfluxDBClient } from "../TimestreamInfluxDBClient";
import { TimestreamInfluxDBPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDbInstancesForCluster: (
  config: TimestreamInfluxDBPaginationConfiguration,
  input: ListDbInstancesForClusterCommandInput,
  ...rest: any[]
) => Paginator<ListDbInstancesForClusterCommandOutput> = createPaginator<
  TimestreamInfluxDBPaginationConfiguration,
  ListDbInstancesForClusterCommandInput,
  ListDbInstancesForClusterCommandOutput
>(TimestreamInfluxDBClient, ListDbInstancesForClusterCommand, "nextToken", "nextToken", "maxResults");
