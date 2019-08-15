import { _TrustedAdvisorResourcesSummary } from "./_TrustedAdvisorResourcesSummary";
import { _TrustedAdvisorCategorySpecificSummary } from "./_TrustedAdvisorCategorySpecificSummary";
import { _TrustedAdvisorResourceDetailList } from "./_TrustedAdvisorResourceDetailList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TrustedAdvisorCheckResult: _Structure_ = {
  type: "structure",
  required: [
    "checkId",
    "timestamp",
    "status",
    "resourcesSummary",
    "categorySpecificSummary",
    "flaggedResources"
  ],
  members: {
    checkId: {
      shape: {
        type: "string"
      }
    },
    timestamp: {
      shape: {
        type: "string"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    resourcesSummary: {
      shape: _TrustedAdvisorResourcesSummary
    },
    categorySpecificSummary: {
      shape: _TrustedAdvisorCategorySpecificSummary
    },
    flaggedResources: {
      shape: _TrustedAdvisorResourceDetailList
    }
  }
};
