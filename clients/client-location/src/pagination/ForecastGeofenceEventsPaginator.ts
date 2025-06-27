// smithy-typescript generated code
import { createPaginator } from "@smithy/core";
import { Paginator } from "@smithy/types";

import {
  ForecastGeofenceEventsCommand,
  ForecastGeofenceEventsCommandInput,
  ForecastGeofenceEventsCommandOutput,
} from "../commands/ForecastGeofenceEventsCommand";
import { LocationClient } from "../LocationClient";
import { LocationPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export const paginateForecastGeofenceEvents: (
  config: LocationPaginationConfiguration,
  input: ForecastGeofenceEventsCommandInput,
  ...rest: any[]
) => Paginator<ForecastGeofenceEventsCommandOutput> = createPaginator<
  LocationPaginationConfiguration,
  ForecastGeofenceEventsCommandInput,
  ForecastGeofenceEventsCommandOutput
>(LocationClient, ForecastGeofenceEventsCommand, "NextToken", "NextToken", "MaxResults");
