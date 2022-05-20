// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { DataSync } from "../DataSync";
import { DataSyncClient } from "../DataSyncClient";

export interface DataSyncPaginationConfiguration extends PaginationConfiguration {
  client: DataSync | DataSyncClient;
}
