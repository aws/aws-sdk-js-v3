import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OperationSummary: _Structure_ = {
  type: "structure",
  required: ["OperationId", "Status", "Type", "SubmittedDate"],
  members: {
    OperationId: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    },
    SubmittedDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
