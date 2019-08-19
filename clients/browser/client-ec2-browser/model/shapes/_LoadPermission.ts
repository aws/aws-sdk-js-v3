import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LoadPermission: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    UserId: {
      shape: {
        type: "string"
      },
      locationName: "userId"
    },
    Group: {
      shape: {
        type: "string"
      },
      locationName: "group"
    }
  }
};
