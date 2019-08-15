import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListActivatedRulesInRuleGroupInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RuleGroupId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    NextMarker: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Limit: {
      shape: {
        type: "integer"
      }
    }
  }
};
