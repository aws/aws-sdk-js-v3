import { Structure as _Structure_ } from "@aws-sdk/types";

export const ServiceAlreadyExists: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Message: {
      shape: {
        type: "string"
      }
    },
    CreatorRequestId: {
      shape: {
        type: "string"
      }
    },
    ServiceId: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "ServiceAlreadyExists"
};
