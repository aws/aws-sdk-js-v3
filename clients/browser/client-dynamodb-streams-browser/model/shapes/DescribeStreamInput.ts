import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeStreamInput: _Structure_ = {
  type: "structure",
  required: ["StreamArn"],
  members: {
    StreamArn: {
      shape: {
        type: "string",
        min: 37
      }
    },
    Limit: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    ExclusiveStartShardId: {
      shape: {
        type: "string",
        min: 28
      }
    }
  }
};
