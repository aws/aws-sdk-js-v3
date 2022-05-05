// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { IoTDataPlane } from "../IoTDataPlane";
import { IoTDataPlaneClient } from "../IoTDataPlaneClient";

export interface IoTDataPlanePaginationConfiguration extends PaginationConfiguration {
  client: IoTDataPlane | IoTDataPlaneClient;
}
