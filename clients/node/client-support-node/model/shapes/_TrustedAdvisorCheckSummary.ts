import { _TrustedAdvisorResourcesSummary } from "./_TrustedAdvisorResourcesSummary";
import { _TrustedAdvisorCategorySpecificSummary } from "./_TrustedAdvisorCategorySpecificSummary";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TrustedAdvisorCheckSummary: _Structure_ = {
  type: "structure",
  required: [
    "checkId",
    "timestamp",
    "status",
    "resourcesSummary",
    "categorySpecificSummary"
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
    hasFlaggedResources: {
      shape: {
        type: "boolean"
      }
    },
    resourcesSummary: {
      shape: _TrustedAdvisorResourcesSummary
    },
    categorySpecificSummary: {
      shape: _TrustedAdvisorCategorySpecificSummary
    }
  }
};
