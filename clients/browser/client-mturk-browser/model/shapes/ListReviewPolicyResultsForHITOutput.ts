import { _ReviewPolicy } from "./_ReviewPolicy";
import { _ReviewReport } from "./_ReviewReport";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListReviewPolicyResultsForHITOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    HITId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    AssignmentReviewPolicy: {
      shape: _ReviewPolicy
    },
    HITReviewPolicy: {
      shape: _ReviewPolicy
    },
    AssignmentReviewReport: {
      shape: _ReviewReport
    },
    HITReviewReport: {
      shape: _ReviewReport
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
