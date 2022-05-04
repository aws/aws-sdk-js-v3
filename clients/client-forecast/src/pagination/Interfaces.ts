// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { Forecast } from "../Forecast";
import { ForecastClient } from "../ForecastClient";

export interface ForecastPaginationConfiguration extends PaginationConfiguration {
  client: Forecast | ForecastClient;
}
