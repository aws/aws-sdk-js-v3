// smithy-typescript generated code
import { PaginationConfiguration } from "@aws-sdk/types";

import { LookoutEquipment } from "../LookoutEquipment";
import { LookoutEquipmentClient } from "../LookoutEquipmentClient";

export interface LookoutEquipmentPaginationConfiguration extends PaginationConfiguration {
  client: LookoutEquipment | LookoutEquipmentClient;
}
