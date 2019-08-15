import { Structure as _Structure_ } from "@aws-sdk/types";

export const SessionLifetimeInMinutesInvalidException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Message: {
      shape: {
        type: "string"
      }
    },
    RequestId: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "SessionLifetimeInMinutesInvalidException"
};
