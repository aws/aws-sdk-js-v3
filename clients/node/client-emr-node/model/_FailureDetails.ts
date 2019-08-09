import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FailureDetails: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Reason: {
      shape: {
        type: "string"
      }
    },
    Message: {
      shape: {
        type: "string"
      }
    },
    LogFile: {
      shape: {
        type: "string"
      }
    }
  }
};
