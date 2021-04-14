import { Amp } from "../Amp";
import { AmpClient } from "../AmpClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface AmpPaginationConfiguration extends PaginationConfiguration {
  client: Amp | AmpClient;
}
