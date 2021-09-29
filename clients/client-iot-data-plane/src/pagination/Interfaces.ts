import { IoTDataPlane } from "../IoTDataPlane";
import { IoTDataPlaneClient } from "../IoTDataPlaneClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface IoTDataPlanePaginationConfiguration extends PaginationConfiguration {
  client: IoTDataPlane | IoTDataPlaneClient;
}
