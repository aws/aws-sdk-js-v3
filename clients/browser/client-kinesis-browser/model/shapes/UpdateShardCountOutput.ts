import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateShardCountOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StreamName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CurrentShardCount: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    TargetShardCount: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
