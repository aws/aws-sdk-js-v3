import { Structure as _Structure_ } from "@aws-sdk/types";

export const ItemContentMismatchException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TypeName: {
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
  exceptionType: "ItemContentMismatchException"
};
