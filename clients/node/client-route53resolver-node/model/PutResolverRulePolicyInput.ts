import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutResolverRulePolicyInput: _Structure_ = {
  type: "structure",
  required: ["Arn", "ResolverRulePolicy"],
  members: {
    Arn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ResolverRulePolicy: {
      shape: {
        type: "string"
      }
    }
  }
};
