import { Structure as _Structure_ } from "@aws-sdk/types";

export const RemoveRoleFromInstanceProfileInput: _Structure_ = {
  type: "structure",
  required: ["InstanceProfileName", "RoleName"],
  members: {
    InstanceProfileName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    RoleName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
