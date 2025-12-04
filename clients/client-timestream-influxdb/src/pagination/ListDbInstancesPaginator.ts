// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDbInstancesCommand,
  ListDbInstancesCommandInput,
  ListDbInstancesCommandOutput,
} from "../commands/ListDbInstancesCommand";
import { TimestreamInfluxDBClient } from "../TimestreamInfluxDBClient";
import { TimestreamInfluxDBPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDbInstances: (
  config: TimestreamInfluxDBPaginationConfiguration,
  input: ListDbInstancesCommandInput,
  ...rest: any[]
) => Paginator<ListDbInstancesCommandOutput> = createPaginator<
  TimestreamInfluxDBPaginationConfiguration,
  ListDbInstancesCommandInput,
  ListDbInstancesCommandOutput
>(TimestreamInfluxDBClient, ListDbInstancesCommand, "nextToken", "nextToken", "maxResults");
