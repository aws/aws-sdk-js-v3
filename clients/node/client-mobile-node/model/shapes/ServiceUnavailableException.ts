import { Structure as _Structure_ } from "@aws-sdk/types";

export const ServiceUnavailableException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    retryAfterSeconds: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "Retry-After"
    },
    message: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "ServiceUnavailableException"
};
