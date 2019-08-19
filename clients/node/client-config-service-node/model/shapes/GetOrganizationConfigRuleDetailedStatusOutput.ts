import { _OrganizationConfigRuleDetailedStatus } from "./_OrganizationConfigRuleDetailedStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetOrganizationConfigRuleDetailedStatusOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    OrganizationConfigRuleDetailedStatus: {
      shape: _OrganizationConfigRuleDetailedStatus
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
