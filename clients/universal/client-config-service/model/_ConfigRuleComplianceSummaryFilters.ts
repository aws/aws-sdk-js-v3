import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ConfigRuleComplianceSummaryFilters: _Structure_ = {
  type: "structure",
  required: [],
  members: {
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
