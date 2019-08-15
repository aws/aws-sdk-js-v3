import { Structure as _Structure_ } from "@aws-sdk/types";

export const AccessDeniedForDependencyException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Message: {
      shape: {
        type: "string"
      }
    },
    Reason: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "AccessDeniedForDependencyException"
};
