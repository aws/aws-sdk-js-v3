import { _OrganizationConfigRuleNames } from "./_OrganizationConfigRuleNames";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeOrganizationConfigRulesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    OrganizationConfigRuleNames: {
      shape: _OrganizationConfigRuleNames
    },
    Limit: {
      shape: {
        type: "integer"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
