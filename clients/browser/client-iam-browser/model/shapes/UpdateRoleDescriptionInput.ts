import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateRoleDescriptionInput: _Structure_ = {
  type: "structure",
  required: ["RoleName", "Description"],
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
    }
  }
};
