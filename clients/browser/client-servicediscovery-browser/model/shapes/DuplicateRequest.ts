import { Structure as _Structure_ } from "@aws-sdk/types";

export const DuplicateRequest: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Message: {
      shape: {
        type: "string"
      }
    },
    DuplicateOperationId: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "DuplicateRequest"
};
