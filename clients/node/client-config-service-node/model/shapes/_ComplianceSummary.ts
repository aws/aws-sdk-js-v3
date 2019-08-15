import { _ComplianceContributorCount } from "./_ComplianceContributorCount";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ComplianceSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CompliantResourceCount: {
      shape: _ComplianceContributorCount
    },
    NonCompliantResourceCount: {
      shape: _ComplianceContributorCount
    },
    ComplianceSummaryTimestamp: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
