import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssociateDRTRoleInput: _Structure_ = {
  type: "structure",
  required: ["RoleArn"],
  members: {
    RoleArn: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
