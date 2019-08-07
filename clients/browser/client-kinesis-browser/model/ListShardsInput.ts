import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListShardsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StreamName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ExclusiveStartShardId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    StreamCreationTimestamp: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
