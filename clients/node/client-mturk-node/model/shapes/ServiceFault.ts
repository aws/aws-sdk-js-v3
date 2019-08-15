import { Structure as _Structure_ } from "@aws-sdk/types";

export const ServiceFault: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Message: {
      shape: {
        type: "string"
      }
    },
    TurkErrorCode: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "ServiceFault"
};
