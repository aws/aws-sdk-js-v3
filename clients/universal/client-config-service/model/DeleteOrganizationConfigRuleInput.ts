import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteOrganizationConfigRuleInput: _Structure_ = {
  type: "structure",
  required: ["OrganizationConfigRuleName"],
  members: {
    OrganizationConfigRuleName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
