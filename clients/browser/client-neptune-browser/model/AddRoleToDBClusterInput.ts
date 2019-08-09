import { Structure as _Structure_ } from "@aws-sdk/types";

export const AddRoleToDBClusterInput: _Structure_ = {
  type: "structure",
  required: ["DBClusterIdentifier", "RoleArn"],
  members: {
    DBClusterIdentifier: {
      shape: {
        type: "string"
      }
    },
    RoleArn: {
      shape: {
        type: "string"
      }
    }
  }
};
