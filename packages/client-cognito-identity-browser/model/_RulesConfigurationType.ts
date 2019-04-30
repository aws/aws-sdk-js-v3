import { _MappingRulesList } from "./_MappingRulesList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RulesConfigurationType: _Structure_ = {
  type: "structure",
  required: ["Rules"],
  members: {
    Rules: {
      shape: _MappingRulesList
    }
  }
};
