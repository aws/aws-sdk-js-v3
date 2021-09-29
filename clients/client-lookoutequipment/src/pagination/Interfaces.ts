import { LookoutEquipment } from "../LookoutEquipment";
import { LookoutEquipmentClient } from "../LookoutEquipmentClient";
import { PaginationConfiguration } from "@aws-sdk/types";

export interface LookoutEquipmentPaginationConfiguration extends PaginationConfiguration {
  client: LookoutEquipment | LookoutEquipmentClient;
}
