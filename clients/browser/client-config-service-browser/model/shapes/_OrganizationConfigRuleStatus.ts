import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OrganizationConfigRuleStatus: _Structure_ = {
  type: "structure",
  required: ["OrganizationConfigRuleName", "OrganizationRuleStatus"],
  members: {
    OrganizationConfigRuleName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    OrganizationRuleStatus: {
      shape: {
        type: "string"
      }
    },
    ErrorCode: {
      shape: {
        type: "string"
      }
    },
    ErrorMessage: {
      shape: {
        type: "string"
      }
    },
    LastUpdateTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
