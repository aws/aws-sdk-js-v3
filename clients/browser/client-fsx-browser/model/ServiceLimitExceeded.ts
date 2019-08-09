import { Structure as _Structure_ } from "@aws-sdk/types";

export const ServiceLimitExceeded: _Structure_ = {
  type: "structure",
  required: ["Limit"],
  members: {
    Limit: {
      shape: {
        type: "string"
      }
    },
    Message: {
      shape: {
        type: "string",
        min: 1
      }
    }
  },
  exceptionType: "ServiceLimitExceeded"
};
