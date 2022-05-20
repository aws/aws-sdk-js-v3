// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { HealthLake } from "../HealthLake";
import { HealthLakeClient } from "../HealthLakeClient";

export interface HealthLakePaginationConfiguration extends PaginationConfiguration {
  client: HealthLake | HealthLakeClient;
}
