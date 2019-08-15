import { _Rule } from "./_Rule";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateRuleOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Rule: {
      shape: _Rule
    },
    ChangeToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
