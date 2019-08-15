import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListInstanceProfilesForRoleInput: _Structure_ = {
  type: "structure",
  required: ["RoleName"],
  members: {
    RoleName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Marker: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MaxItems: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
