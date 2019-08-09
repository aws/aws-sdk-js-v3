import { _ReservedDBInstance } from "./_ReservedDBInstance";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PurchaseReservedDBInstancesOfferingOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ReservedDBInstance: {
      shape: _ReservedDBInstance
    }
  }
};
