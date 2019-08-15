import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UnprocessedStatistics: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RuleName: {
      shape: {
        type: "string"
      }
    },
    ErrorCode: {
      shape: {
        type: "string"
      }
    },
    Message: {
      shape: {
        type: "string"
      }
    }
  }
};
