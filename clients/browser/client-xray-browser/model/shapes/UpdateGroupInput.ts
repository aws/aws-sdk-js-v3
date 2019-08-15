import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateGroupInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    GroupARN: {
      shape: {
        type: "string",
        min: 1
      }
    },
    FilterExpression: {
      shape: {
        type: "string"
      }
    }
  }
};
