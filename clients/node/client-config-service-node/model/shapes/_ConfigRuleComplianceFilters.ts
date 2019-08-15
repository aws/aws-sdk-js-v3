import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ConfigRuleComplianceFilters: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConfigRuleName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ComplianceType: {
      shape: {
        type: "string"
      }
    },
    AccountId: {
      shape: {
        type: "string"
      }
    },
    AwsRegion: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
