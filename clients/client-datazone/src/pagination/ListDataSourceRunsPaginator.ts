// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDataSourceRunsCommand,
  ListDataSourceRunsCommandInput,
  ListDataSourceRunsCommandOutput,
} from "../commands/ListDataSourceRunsCommand";
import { DataZoneClient } from "../DataZoneClient";
import { DataZonePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDataSourceRuns: (
  config: DataZonePaginationConfiguration,
  input: ListDataSourceRunsCommandInput,
  ...rest: any[]
) => Paginator<ListDataSourceRunsCommandOutput> = createPaginator<
  DataZonePaginationConfiguration,
  ListDataSourceRunsCommandInput,
  ListDataSourceRunsCommandOutput
>(DataZoneClient, ListDataSourceRunsCommand, "nextToken", "nextToken", "maxResults");
