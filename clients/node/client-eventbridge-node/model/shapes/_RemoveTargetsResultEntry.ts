import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RemoveTargetsResultEntry: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TargetId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ErrorCode: {
      shape: {
        type: "string"
      }
    },
    ErrorMessage: {
      shape: {
        type: "string"
      }
    }
  }
};
