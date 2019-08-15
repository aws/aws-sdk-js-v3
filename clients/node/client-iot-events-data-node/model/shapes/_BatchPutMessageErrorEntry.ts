import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BatchPutMessageErrorEntry: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    messageId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    errorCode: {
      shape: {
        type: "string"
      }
    },
    errorMessage: {
      shape: {
        type: "string"
      }
    }
  }
};
