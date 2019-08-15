import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutUserPermissionsBoundaryInput: _Structure_ = {
  type: "structure",
  required: ["UserName", "PermissionsBoundary"],
  members: {
    UserName: {
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
