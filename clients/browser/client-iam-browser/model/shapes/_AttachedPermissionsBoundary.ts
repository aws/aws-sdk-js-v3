import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AttachedPermissionsBoundary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PermissionsBoundaryType: {
      shape: {
        type: "string"
      }
    },
    PermissionsBoundaryArn: {
      shape: {
        type: "string",
        min: 20
      }
    }
  }
};
