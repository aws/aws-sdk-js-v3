import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SecurityGroup: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    groupName: {
      shape: {
        type: "string"
      }
    },
    groupId: {
      shape: {
        type: "string"
      }
    }
  }
};
