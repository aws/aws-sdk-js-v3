import { DataSync } from "../DataSync";
import { DataSyncClient } from "../DataSyncClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface DataSyncPaginationConfiguration extends PaginationConfiguration {
  client: DataSync | DataSyncClient;
}
