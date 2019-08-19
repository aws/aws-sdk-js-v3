import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateRoleInput: _Structure_ = {
  type: "structure",
  required: ["RoleName"],
  members: {
    RoleName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    MaxSessionDuration: {
      shape: {
        type: "integer",
        min: 3600
      }
    }
  }
};
