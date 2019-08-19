import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SecurityGroup: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GroupId: {
      shape: {
        type: "string"
      },
      locationName: "groupId"
    },
    GroupName: {
      shape: {
        type: "string"
      },
      locationName: "groupName"
    }
  }
};
