import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FailWorkflowExecutionDecisionAttributes: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    reason: {
      shape: {
        type: "string"
      }
    },
    details: {
      shape: {
        type: "string"
      }
    }
  }
};
