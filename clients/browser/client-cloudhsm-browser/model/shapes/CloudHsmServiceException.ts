import { Structure as _Structure_ } from "@aws-sdk/types";

export const CloudHsmServiceException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    message: {
      shape: {
        type: "string"
      }
    },
    retryable: {
      shape: {
        type: "boolean"
      }
    }
  },
  exceptionType: "CloudHsmServiceException"
};
