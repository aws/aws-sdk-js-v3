// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { SecurityLake } from "../SecurityLake";
import { SecurityLakeClient } from "../SecurityLakeClient";

export interface SecurityLakePaginationConfiguration extends PaginationConfiguration {
  client: SecurityLake | SecurityLakeClient;
}
