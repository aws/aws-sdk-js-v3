import { _SubscribedRuleGroupSummaries } from "./_SubscribedRuleGroupSummaries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListSubscribedRuleGroupsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextMarker: {
      shape: {
        type: "string",
        min: 1
      }
    },
    RuleGroups: {
      shape: _SubscribedRuleGroupSummaries
    }
  }
};
