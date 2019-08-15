import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModelError: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Message: {
      shape: {
        type: "string"
      }
    },
    OriginalStatusCode: {
      shape: {
        type: "integer"
      }
    },
    OriginalMessage: {
      shape: {
        type: "string"
      }
    },
    LogStreamArn: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "ModelError"
};
