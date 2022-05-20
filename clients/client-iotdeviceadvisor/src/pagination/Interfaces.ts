// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { IotDeviceAdvisor } from "../IotDeviceAdvisor";
import { IotDeviceAdvisorClient } from "../IotDeviceAdvisorClient";

export interface IotDeviceAdvisorPaginationConfiguration extends PaginationConfiguration {
  client: IotDeviceAdvisor | IotDeviceAdvisorClient;
}
