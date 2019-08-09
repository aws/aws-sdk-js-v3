import { _ResolverRuleConfig } from "./_ResolverRuleConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateResolverRuleInput: _Structure_ = {
  type: "structure",
  required: ["ResolverRuleId", "Config"],
  members: {
    ResolverRuleId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Config: {
      shape: _ResolverRuleConfig
    }
  }
};
