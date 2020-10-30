import { DeviceFarm } from "../DeviceFarm";
import { DeviceFarmClient } from "../DeviceFarmClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface DeviceFarmPaginationConfiguration extends PaginationConfiguration {
  client: DeviceFarm | DeviceFarmClient;
}
