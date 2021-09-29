import { Health } from "../Health";
import { HealthClient } from "../HealthClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface HealthPaginationConfiguration extends PaginationConfiguration {
  client: Health | HealthClient;
}
