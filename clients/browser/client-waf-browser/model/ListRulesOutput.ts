import { _RuleSummaries } from "./_RuleSummaries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListRulesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextMarker: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Rules: {
      shape: _RuleSummaries
    }
  }
};
