import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ComplianceExecutionSummary: _Structure_ = {
  type: "structure",
  required: ["ExecutionTime"],
  members: {
    ExecutionTime: {
      shape: {
        type: "timestamp"
      }
    },
    ExecutionId: {
      shape: {
        type: "string"
      }
    },
    ExecutionType: {
      shape: {
        type: "string"
      }
    }
  }
};
