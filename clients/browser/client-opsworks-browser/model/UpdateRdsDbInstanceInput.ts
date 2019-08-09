import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateRdsDbInstanceInput: _Structure_ = {
  type: "structure",
  required: ["RdsDbInstanceArn"],
  members: {
    RdsDbInstanceArn: {
      shape: {
        type: "string"
      }
    },
    DbUser: {
      shape: {
        type: "string"
      }
    },
    DbPassword: {
      shape: {
        type: "string"
      }
    }
  }
};
