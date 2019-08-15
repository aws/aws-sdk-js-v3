import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteDBInstanceInput: _Structure_ = {
  type: "structure",
  required: ["DBInstanceIdentifier"],
  members: {
    DBInstanceIdentifier: {
      shape: {
        type: "string"
      }
    }
  }
};
