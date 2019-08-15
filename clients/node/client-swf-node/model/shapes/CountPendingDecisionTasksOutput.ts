import { Structure as _Structure_ } from "@aws-sdk/types";

export const CountPendingDecisionTasksOutput: _Structure_ = {
  type: "structure",
  required: ["count"],
  members: {
    count: {
      shape: {
        type: "integer"
      }
    },
    truncated: {
      shape: {
        type: "boolean"
      }
    }
  }
};
