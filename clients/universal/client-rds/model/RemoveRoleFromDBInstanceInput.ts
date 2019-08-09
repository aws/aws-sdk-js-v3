import { Structure as _Structure_ } from "@aws-sdk/types";

export const RemoveRoleFromDBInstanceInput: _Structure_ = {
  type: "structure",
  required: ["DBInstanceIdentifier", "RoleArn", "FeatureName"],
  members: {
    DBInstanceIdentifier: {
      shape: {
        type: "string"
      }
    },
    RoleArn: {
      shape: {
        type: "string"
      }
    },
    FeatureName: {
      shape: {
        type: "string"
      }
    }
  }
};
