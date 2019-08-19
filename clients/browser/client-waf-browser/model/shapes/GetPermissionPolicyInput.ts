import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetPermissionPolicyInput: _Structure_ = {
  type: "structure",
  required: ["ResourceArn"],
  members: {
    ResourceArn: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
