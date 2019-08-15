import { Structure as _Structure_ } from "@aws-sdk/types";

export const InvalidParameterException: _Structure_ = {
  type: "structure",
  required: ["Message"],
  members: {
    Message: {
      shape: {
        type: "string"
      }
    },
    FieldName: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "InvalidParameterException"
};
