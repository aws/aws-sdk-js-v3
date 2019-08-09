import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetAggregateComplianceDetailsByConfigRuleInput: _Structure_ = {
  type: "structure",
  required: [
    "ConfigurationAggregatorName",
    "ConfigRuleName",
    "AccountId",
    "AwsRegion"
  ],
  members: {
    ConfigurationAggregatorName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ConfigRuleName: {
      shape: {
        type: "string",
        min: 1
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
    },
    ComplianceType: {
      shape: {
        type: "string"
      }
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
