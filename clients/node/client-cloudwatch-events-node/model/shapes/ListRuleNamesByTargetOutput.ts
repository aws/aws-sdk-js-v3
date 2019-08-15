import { _RuleNameList } from "./_RuleNameList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListRuleNamesByTargetOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RuleNames: {
      shape: _RuleNameList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
