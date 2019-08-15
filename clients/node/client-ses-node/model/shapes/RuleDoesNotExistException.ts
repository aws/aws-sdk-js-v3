import { Structure as _Structure_ } from "@aws-sdk/types";

export const RuleDoesNotExistException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "RuleDoesNotExistException",
  exceptionCode: "RuleDoesNotExist"
};
