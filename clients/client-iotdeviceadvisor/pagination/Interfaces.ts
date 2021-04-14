import { IotDeviceAdvisor } from "../IotDeviceAdvisor";
import { IotDeviceAdvisorClient } from "../IotDeviceAdvisorClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface IotDeviceAdvisorPaginationConfiguration extends PaginationConfiguration {
  client: IotDeviceAdvisor | IotDeviceAdvisorClient;
}
