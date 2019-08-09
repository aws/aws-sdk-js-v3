import { Structure as _Structure_ } from "@aws-sdk/types";

export const FailoverDBClusterInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DBClusterIdentifier: {
      shape: {
        type: "string"
      }
    },
    TargetDBInstanceIdentifier: {
      shape: {
        type: "string"
      }
    }
  }
};
