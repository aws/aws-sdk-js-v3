import { _ResolverRuleAssociation } from "./_ResolverRuleAssociation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetResolverRuleAssociationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ResolverRuleAssociation: {
      shape: _ResolverRuleAssociation
    }
  }
};
