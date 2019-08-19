import { Structure as _Structure_ } from "@aws-sdk/types";

export const WAFInvalidParameterException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    field: {
      shape: {
        type: "string"
      }
    },
    parameter: {
      shape: {
        type: "string",
        min: 1
      }
    },
    reason: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "WAFInvalidParameterException"
};
