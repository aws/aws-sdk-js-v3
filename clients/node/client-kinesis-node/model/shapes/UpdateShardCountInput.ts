import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateShardCountInput: _Structure_ = {
  type: "structure",
  required: ["StreamName", "TargetShardCount", "ScalingType"],
  members: {
    StreamName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TargetShardCount: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    ScalingType: {
      shape: {
        type: "string"
      }
    }
  }
};
