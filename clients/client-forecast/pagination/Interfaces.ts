import { Forecast } from "../Forecast";
import { ForecastClient } from "../ForecastClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface ForecastPaginationConfiguration extends PaginationConfiguration {
  client: Forecast | ForecastClient;
}
