import { _RuleResponseList } from "./_RuleResponseList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListRulesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Rules: {
      shape: _RuleResponseList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
