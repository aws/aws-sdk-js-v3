import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListStreamsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TableName: {
      shape: {
        type: "string",
        min: 3
      }
    },
    Limit: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    ExclusiveStartStreamArn: {
      shape: {
        type: "string",
        min: 37
      }
    }
  }
};
