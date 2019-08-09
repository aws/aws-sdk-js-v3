import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PolicyTargetSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TargetId: {
      shape: {
        type: "string"
      }
    },
    Arn: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    }
  }
};
