import { Structure as _Structure_ } from "@aws-sdk/types";

export const UnmodifiableEntityException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    message: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "UnmodifiableEntityException",
  exceptionCode: "UnmodifiableEntity"
};
