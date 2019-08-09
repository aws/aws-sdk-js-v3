import { Structure as _Structure_ } from "@aws-sdk/types";

export const _GroupIdentifier: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    GroupArn: {
      shape: {
        type: "string",
        min: 12
      }
    }
  }
};
