import { Structure as _Structure_ } from "@aws-sdk/types";

export const MergeShardsInput: _Structure_ = {
  type: "structure",
  required: ["StreamName", "ShardToMerge", "AdjacentShardToMerge"],
  members: {
    StreamName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ShardToMerge: {
      shape: {
        type: "string",
        min: 1
      }
    },
    AdjacentShardToMerge: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
