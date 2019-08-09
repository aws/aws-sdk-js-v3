import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LoadPermissionRequest: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Group: {
      shape: {
        type: "string"
      }
    },
    UserId: {
      shape: {
        type: "string"
      }
    }
  }
};
