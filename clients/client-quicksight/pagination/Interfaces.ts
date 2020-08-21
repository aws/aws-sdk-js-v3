import { QuickSight } from "../QuickSight";
import { QuickSightClient } from "../QuickSightClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface QuickSightPaginationConfiguration extends PaginationConfiguration {
  client: QuickSight | QuickSightClient;
}
