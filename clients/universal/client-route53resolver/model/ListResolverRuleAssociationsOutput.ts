import { _ResolverRuleAssociations } from "./_ResolverRuleAssociations";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListResolverRuleAssociationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    ResolverRuleAssociations: {
      shape: _ResolverRuleAssociations
    }
  }
};
