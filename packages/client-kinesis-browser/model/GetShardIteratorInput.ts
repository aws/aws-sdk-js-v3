import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetShardIteratorInput: _Structure_ = {
  type: "structure",
  required: ["StreamName", "ShardId", "ShardIteratorType"],
  members: {
    StreamName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ShardId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ShardIteratorType: {
      shape: {
        type: "string"
      }
    },
    StartingSequenceNumber: {
      shape: {
        type: "string"
      }
    },
    Timestamp: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
