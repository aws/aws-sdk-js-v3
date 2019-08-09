import { Structure as _Structure_ } from "@aws-sdk/types";

export const IncompatibleParameterError: _Structure_ = {
  type: "structure",
  required: ["Parameter"],
  members: {
    Parameter: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Message: {
      shape: {
        type: "string",
        min: 1
      }
    }
  },
  exceptionType: "IncompatibleParameterError"
};
