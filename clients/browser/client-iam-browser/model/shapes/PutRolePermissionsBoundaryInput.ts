import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutRolePermissionsBoundaryInput: _Structure_ = {
  type: "structure",
  required: ["RoleName", "PermissionsBoundary"],
  members: {
    RoleName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PermissionsBoundary: {
      shape: {
        type: "string",
        min: 20
      }
    }
  }
};
