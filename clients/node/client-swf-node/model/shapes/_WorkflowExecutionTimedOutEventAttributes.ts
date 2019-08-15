import { Structure as _Structure_ } from "@aws-sdk/types";

export const _WorkflowExecutionTimedOutEventAttributes: _Structure_ = {
  type: "structure",
  required: ["timeoutType", "childPolicy"],
  members: {
    timeoutType: {
      shape: {
        type: "string"
      }
    },
    childPolicy: {
      shape: {
        type: "string"
      }
    }
  }
};
