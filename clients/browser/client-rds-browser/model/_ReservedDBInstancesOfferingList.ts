import { List as _List_ } from "@aws-sdk/types";
import { _ReservedDBInstancesOffering } from "./_ReservedDBInstancesOffering";

export const _ReservedDBInstancesOfferingList: _List_ = {
  type: "list",
  member: {
    shape: _ReservedDBInstancesOffering,
    locationName: "ReservedDBInstancesOffering"
  }
};
