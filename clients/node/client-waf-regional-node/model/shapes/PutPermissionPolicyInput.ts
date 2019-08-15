import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutPermissionPolicyInput: _Structure_ = {
  type: "structure",
  required: ["ResourceArn", "Policy"],
  members: {
    ResourceArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Policy: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
