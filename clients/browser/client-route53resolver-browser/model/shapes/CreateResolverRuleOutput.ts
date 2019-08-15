import { _ResolverRule } from "./_ResolverRule";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateResolverRuleOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ResolverRule: {
      shape: _ResolverRule
    }
  }
};
