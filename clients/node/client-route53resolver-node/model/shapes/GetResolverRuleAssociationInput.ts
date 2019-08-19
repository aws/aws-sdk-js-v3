import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetResolverRuleAssociationInput: _Structure_ = {
  type: "structure",
  required: ["ResolverRuleAssociationId"],
  members: {
    ResolverRuleAssociationId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
