import { Structure as _Structure_ } from "@aws-sdk/types";

export const ServiceTemporarilyUnavailableException: _Structure_ = {
  type: "structure",
  required: ["message", "canRetry"],
  members: {
    message: {
      shape: {
        type: "string"
      }
    },
    canRetry: {
      shape: {
        type: "boolean"
      }
    }
  },
  exceptionType: "ServiceTemporarilyUnavailableException"
};
