import { _Rule } from "./_Rule";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetRuleOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Rule: {
      shape: _Rule
    }
  }
};
