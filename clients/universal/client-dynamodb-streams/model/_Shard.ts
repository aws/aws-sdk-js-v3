import { _SequenceNumberRange } from "./_SequenceNumberRange";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Shard: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ShardId: {
      shape: {
        type: "string",
        min: 28
      }
    },
    SequenceNumberRange: {
      shape: _SequenceNumberRange
    },
    ParentShardId: {
      shape: {
        type: "string",
        min: 28
      }
    }
  }
};
