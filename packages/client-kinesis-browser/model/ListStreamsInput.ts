import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListStreamsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Limit: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    ExclusiveStartStreamName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
