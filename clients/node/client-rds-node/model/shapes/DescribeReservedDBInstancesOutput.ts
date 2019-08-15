import { _ReservedDBInstanceList } from "./_ReservedDBInstanceList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeReservedDBInstancesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Marker: {
      shape: {
        type: "string"
      }
    },
    ReservedDBInstances: {
      shape: _ReservedDBInstanceList
    }
  }
};
