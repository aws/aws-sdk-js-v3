import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Group: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GroupName: {
      shape: {
        type: "string"
      }
    },
    GroupARN: {
      shape: {
        type: "string"
      }
    },
    FilterExpression: {
      shape: {
        type: "string"
      }
    }
  }
};
