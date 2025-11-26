// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import type { Paginator } from "@smithy/types";

import {
  ListTimeSeriesDataPointsCommand,
  ListTimeSeriesDataPointsCommandInput,
  ListTimeSeriesDataPointsCommandOutput,
} from "../commands/ListTimeSeriesDataPointsCommand";
import { DataZoneClient } from "../DataZoneClient";
import { DataZonePaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateListTimeSeriesDataPoints: (
  config: DataZonePaginationConfiguration,
  input: ListTimeSeriesDataPointsCommandInput,
  ...rest: any[]
) => Paginator<ListTimeSeriesDataPointsCommandOutput> = createPaginator<
  DataZonePaginationConfiguration,
  ListTimeSeriesDataPointsCommandInput,
  ListTimeSeriesDataPointsCommandOutput
>(DataZoneClient, ListTimeSeriesDataPointsCommand, "nextToken", "nextToken", "maxResults");
