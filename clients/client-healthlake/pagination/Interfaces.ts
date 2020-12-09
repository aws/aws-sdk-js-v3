import { HealthLake } from "../HealthLake";
import { HealthLakeClient } from "../HealthLakeClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface HealthLakePaginationConfiguration extends PaginationConfiguration {
  client: HealthLake | HealthLakeClient;
}
