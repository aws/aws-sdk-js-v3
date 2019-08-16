import { _HashKeyRange } from "./_HashKeyRange";
import { _SequenceNumberRange } from "./_SequenceNumberRange";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Shard: _Structure_ = {
  type: "structure",
  required: ["ShardId", "HashKeyRange", "SequenceNumberRange"],
  members: {
    ShardId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ParentShardId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    AdjacentParentShardId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    HashKeyRange: {
      shape: _HashKeyRange
    },
    SequenceNumberRange: {
      shape: _SequenceNumberRange
    }
  }
};
