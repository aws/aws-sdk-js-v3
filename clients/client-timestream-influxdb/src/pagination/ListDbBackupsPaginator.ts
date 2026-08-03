// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDbBackupsCommand,
  ListDbBackupsCommandInput,
  ListDbBackupsCommandOutput,
} from "../commands/ListDbBackupsCommand";
import { TimestreamInfluxDBClient } from "../TimestreamInfluxDBClient";
import type { TimestreamInfluxDBPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDbBackups: (
  config: TimestreamInfluxDBPaginationConfiguration,
  input: ListDbBackupsCommandInput,
  ...rest: any[]
) => Paginator<ListDbBackupsCommandOutput> = createPaginator<
  TimestreamInfluxDBPaginationConfiguration,
  ListDbBackupsCommandInput,
  ListDbBackupsCommandOutput
>(TimestreamInfluxDBClient, ListDbBackupsCommand, "nextToken", "nextToken", "maxResults");
