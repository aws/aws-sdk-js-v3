// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { DeviceFarm } from "../DeviceFarm";
import { DeviceFarmClient } from "../DeviceFarmClient";

export interface DeviceFarmPaginationConfiguration extends PaginationConfiguration {
  client: DeviceFarm | DeviceFarmClient;
}
