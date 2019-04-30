import { Structure as _Structure_ } from "@aws-sdk/types";

export const ResourceInUseException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Type: {
      shape: {
        type: "string"
      }
    },
    Message: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "ResourceInUseException"
};
