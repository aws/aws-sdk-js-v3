import { Structure as _Structure_ } from "@aws-sdk/types";

export const _GroupNameAndArn: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    groupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    groupArn: {
      shape: {
        type: "string"
      }
    }
  }
};
