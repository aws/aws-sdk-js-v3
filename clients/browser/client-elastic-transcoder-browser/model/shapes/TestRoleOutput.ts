import { _ExceptionMessages } from "./_ExceptionMessages";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const TestRoleOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Success: {
      shape: {
        type: "string"
      }
    },
    Messages: {
      shape: _ExceptionMessages
    }
  }
};
