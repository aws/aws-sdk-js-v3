import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ActionExecutionResult: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    externalExecutionId: {
      shape: {
        type: "string"
      }
    },
    externalExecutionSummary: {
      shape: {
        type: "string"
      }
    },
    externalExecutionUrl: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
