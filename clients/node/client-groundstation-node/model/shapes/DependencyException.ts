import { Structure as _Structure_ } from "@aws-sdk/types";

export const DependencyException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    message: {
      shape: {
        type: "string"
      }
    },
    parameterName: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "DependencyException",
  exceptionCode: "DependencyException"
};
