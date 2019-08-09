import { Structure as _Structure_ } from "@aws-sdk/types";

export const CannotDeleteException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "CannotDeleteException",
  exceptionCode: "CannotDelete"
};
