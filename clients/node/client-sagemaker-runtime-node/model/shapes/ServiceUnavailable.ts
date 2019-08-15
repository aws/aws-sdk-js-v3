import { Structure as _Structure_ } from "@aws-sdk/types";

export const ServiceUnavailable: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Message: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "ServiceUnavailable"
};
