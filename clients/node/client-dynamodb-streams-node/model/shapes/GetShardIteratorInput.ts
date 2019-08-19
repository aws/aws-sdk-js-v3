import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetShardIteratorInput: _Structure_ = {
  type: "structure",
  required: ["StreamArn", "ShardId", "ShardIteratorType"],
  members: {
    StreamArn: {
      shape: {
        type: "string",
        min: 37
      }
    },
    ShardId: {
      shape: {
        type: "string",
        min: 28
      }
    },
    ShardIteratorType: {
      shape: {
        type: "string"
      }
    },
    SequenceNumber: {
      shape: {
        type: "string",
        min: 21
      }
    }
  }
};
