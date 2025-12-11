// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDbParameterGroupsCommand,
  ListDbParameterGroupsCommandInput,
  ListDbParameterGroupsCommandOutput,
} from "../commands/ListDbParameterGroupsCommand";
import { TimestreamInfluxDBClient } from "../TimestreamInfluxDBClient";
import { TimestreamInfluxDBPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDbParameterGroups: (
  config: TimestreamInfluxDBPaginationConfiguration,
  input: ListDbParameterGroupsCommandInput,
  ...rest: any[]
) => Paginator<ListDbParameterGroupsCommandOutput> = createPaginator<
  TimestreamInfluxDBPaginationConfiguration,
  ListDbParameterGroupsCommandInput,
  ListDbParameterGroupsCommandOutput
>(TimestreamInfluxDBClient, ListDbParameterGroupsCommand, "nextToken", "nextToken", "maxResults");
