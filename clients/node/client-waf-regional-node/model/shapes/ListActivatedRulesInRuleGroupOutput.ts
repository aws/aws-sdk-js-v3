import { _ActivatedRules } from "./_ActivatedRules";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListActivatedRulesInRuleGroupOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextMarker: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ActivatedRules: {
      shape: _ActivatedRules
    }
  }
};
