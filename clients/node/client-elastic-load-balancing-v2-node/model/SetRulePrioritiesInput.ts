import { _RulePriorityList } from "./_RulePriorityList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SetRulePrioritiesInput: _Structure_ = {
  type: "structure",
  required: ["RulePriorities"],
  members: {
    RulePriorities: {
      shape: _RulePriorityList
    }
  }
};
