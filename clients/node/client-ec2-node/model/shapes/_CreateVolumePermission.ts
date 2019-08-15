import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CreateVolumePermission: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Group: {
      shape: {
        type: "string"
      },
      locationName: "group"
    },
    UserId: {
      shape: {
        type: "string"
      },
      locationName: "userId"
    }
  }
};
