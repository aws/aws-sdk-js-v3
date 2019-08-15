import { Structure as _Structure_ } from "@aws-sdk/types";

export const UnsupportedAvailabilityZone: _Structure_ = {
  type: "structure",
  required: ["ErrorCode"],
  members: {
    ErrorCode: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Message: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "UnsupportedAvailabilityZone"
};
