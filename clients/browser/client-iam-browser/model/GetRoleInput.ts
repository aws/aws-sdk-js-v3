import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetRoleInput: _Structure_ = {
  type: "structure",
  required: ["RoleName"],
  members: {
    RoleName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
