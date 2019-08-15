import { _OrganizationConfigRules } from "./_OrganizationConfigRules";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeOrganizationConfigRulesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    OrganizationConfigRules: {
      shape: _OrganizationConfigRules
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
