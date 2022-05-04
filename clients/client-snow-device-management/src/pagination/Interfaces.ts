// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { SnowDeviceManagement } from "../SnowDeviceManagement";
import { SnowDeviceManagementClient } from "../SnowDeviceManagementClient";

export interface SnowDeviceManagementPaginationConfiguration extends PaginationConfiguration {
  client: SnowDeviceManagement | SnowDeviceManagementClient;
}
