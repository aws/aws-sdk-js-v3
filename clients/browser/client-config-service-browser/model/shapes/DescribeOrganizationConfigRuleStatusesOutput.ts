import { _OrganizationConfigRuleStatuses } from "./_OrganizationConfigRuleStatuses";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeOrganizationConfigRuleStatusesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    OrganizationConfigRuleStatuses: {
      shape: _OrganizationConfigRuleStatuses
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
