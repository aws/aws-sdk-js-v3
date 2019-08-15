import { _AuthorizationRuleSet } from "./_AuthorizationRuleSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeClientVpnAuthorizationRulesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AuthorizationRules: {
      shape: _AuthorizationRuleSet,
      locationName: "authorizationRule"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
