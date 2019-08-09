import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetShardIteratorOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ShardIterator: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
