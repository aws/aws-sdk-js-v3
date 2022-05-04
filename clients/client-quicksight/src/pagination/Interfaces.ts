// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { QuickSight } from "../QuickSight";
import { QuickSightClient } from "../QuickSightClient";

export interface QuickSightPaginationConfiguration extends PaginationConfiguration {
  client: QuickSight | QuickSightClient;
}
