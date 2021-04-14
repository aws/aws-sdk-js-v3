import { IoTFleetHub } from "../IoTFleetHub";
import { IoTFleetHubClient } from "../IoTFleetHubClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface IoTFleetHubPaginationConfiguration extends PaginationConfiguration {
  client: IoTFleetHub | IoTFleetHubClient;
}
