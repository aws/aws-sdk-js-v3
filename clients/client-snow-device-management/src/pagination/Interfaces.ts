import { SnowDeviceManagement } from "../SnowDeviceManagement";
import { SnowDeviceManagementClient } from "../SnowDeviceManagementClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface SnowDeviceManagementPaginationConfiguration extends PaginationConfiguration {
  client: SnowDeviceManagement | SnowDeviceManagementClient;
}
