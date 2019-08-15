import { Structure as _Structure_ } from "@aws-sdk/types";

export const ConcurrentModificationException: _Structure_ = {
  type: "structure",
  required: ["message"],
  members: {
    message: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "ConcurrentModificationException",
  exceptionCode: "ConcurrentModification"
};
