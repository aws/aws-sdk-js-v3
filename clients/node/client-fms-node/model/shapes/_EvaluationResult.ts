import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EvaluationResult: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ComplianceStatus: {
      shape: {
        type: "string"
      }
    },
    ViolatorCount: {
      shape: {
        type: "integer"
      }
    },
    EvaluationLimitExceeded: {
      shape: {
        type: "boolean"
      }
    }
  }
};
