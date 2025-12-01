// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListDataSourceRunActivitiesCommand,
  ListDataSourceRunActivitiesCommandInput,
  ListDataSourceRunActivitiesCommandOutput,
} from "../commands/ListDataSourceRunActivitiesCommand";
import { DataZoneClient } from "../DataZoneClient";
import { DataZonePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListDataSourceRunActivities: (
  config: DataZonePaginationConfiguration,
  input: ListDataSourceRunActivitiesCommandInput,
  ...rest: any[]
) => Paginator<ListDataSourceRunActivitiesCommandOutput> = createPaginator<
  DataZonePaginationConfiguration,
  ListDataSourceRunActivitiesCommandInput,
  ListDataSourceRunActivitiesCommandOutput
>(DataZoneClient, ListDataSourceRunActivitiesCommand, "nextToken", "nextToken", "maxResults");
