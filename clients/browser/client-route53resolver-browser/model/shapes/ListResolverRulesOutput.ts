import { _ResolverRules } from "./_ResolverRules";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListResolverRulesOutput: _Structure_ = {
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
    ResolverRules: {
      shape: _ResolverRules
    }
  }
};
