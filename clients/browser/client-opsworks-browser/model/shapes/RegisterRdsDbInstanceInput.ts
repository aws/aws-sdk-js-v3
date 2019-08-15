import { Structure as _Structure_ } from "@aws-sdk/types";

export const RegisterRdsDbInstanceInput: _Structure_ = {
  type: "structure",
  required: ["StackId", "RdsDbInstanceArn", "DbUser", "DbPassword"],
  members: {
    StackId: {
      shape: {
        type: "string"
      }
    },
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
