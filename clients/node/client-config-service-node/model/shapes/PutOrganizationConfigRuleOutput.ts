import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutOrganizationConfigRuleOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    OrganizationConfigRuleArn: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
