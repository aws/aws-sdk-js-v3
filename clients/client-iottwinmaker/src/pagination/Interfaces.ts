// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { IoTTwinMaker } from "../IoTTwinMaker";
import { IoTTwinMakerClient } from "../IoTTwinMakerClient";

export interface IoTTwinMakerPaginationConfiguration extends PaginationConfiguration {
  client: IoTTwinMaker | IoTTwinMakerClient;
}
