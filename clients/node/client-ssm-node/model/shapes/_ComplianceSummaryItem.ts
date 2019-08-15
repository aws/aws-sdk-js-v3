import { _CompliantSummary } from "./_CompliantSummary";
import { _NonCompliantSummary } from "./_NonCompliantSummary";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ComplianceSummaryItem: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ComplianceType: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CompliantSummary: {
      shape: _CompliantSummary
    },
    NonCompliantSummary: {
      shape: _NonCompliantSummary
    }
  }
};
