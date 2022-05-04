// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { FinspaceData } from "../FinspaceData";
import { FinspaceDataClient } from "../FinspaceDataClient";

export interface FinspaceDataPaginationConfiguration extends PaginationConfiguration {
  client: FinspaceData | FinspaceDataClient;
}
