// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDataSourcesCommand,
  ListDataSourcesCommandInput,
  ListDataSourcesCommandOutput,
} from "../commands/ListDataSourcesCommand";
import { DataZoneClient } from "../DataZoneClient";
import { DataZonePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDataSources: (
  config: DataZonePaginationConfiguration,
  input: ListDataSourcesCommandInput,
  ...rest: any[]
) => Paginator<ListDataSourcesCommandOutput> = createPaginator<
  DataZonePaginationConfiguration,
  ListDataSourcesCommandInput,
  ListDataSourcesCommandOutput
>(DataZoneClient, ListDataSourcesCommand, "nextToken", "nextToken", "maxResults");
