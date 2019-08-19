import { _DecisionList } from "./_DecisionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RespondDecisionTaskCompletedInput: _Structure_ = {
  type: "structure",
  required: ["taskToken"],
  members: {
    taskToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    decisions: {
      shape: _DecisionList
    },
    executionContext: {
      shape: {
        type: "string"
      }
    }
  }
};
