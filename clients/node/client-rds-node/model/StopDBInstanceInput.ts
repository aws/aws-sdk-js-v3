import { Structure as _Structure_ } from "@aws-sdk/types";

export const StopDBInstanceInput: _Structure_ = {
  type: "structure",
  required: ["DBInstanceIdentifier"],
  members: {
    DBInstanceIdentifier: {
      shape: {
        type: "string"
      }
    },
    DBSnapshotIdentifier: {
      shape: {
        type: "string"
      }
    }
  }
};
