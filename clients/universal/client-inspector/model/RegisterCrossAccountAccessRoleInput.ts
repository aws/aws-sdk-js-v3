import { Structure as _Structure_ } from "@aws-sdk/types";

export const RegisterCrossAccountAccessRoleInput: _Structure_ = {
  type: "structure",
  required: ["roleArn"],
  members: {
    roleArn: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
