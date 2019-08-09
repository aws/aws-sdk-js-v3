import { Structure as _Structure_ } from "@aws-sdk/types";

export const RebootDBInstanceInput: _Structure_ = {
  type: "structure",
  required: ["DBInstanceIdentifier"],
  members: {
    DBInstanceIdentifier: {
      shape: {
        type: "string"
      }
    },
    ForceFailover: {
      shape: {
        type: "boolean"
      }
    }
  }
};
