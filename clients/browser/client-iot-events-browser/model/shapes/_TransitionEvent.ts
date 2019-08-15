import { _Actions } from "./_Actions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TransitionEvent: _Structure_ = {
  type: "structure",
  required: ["eventName", "condition", "nextState"],
  members: {
    eventName: {
      shape: {
        type: "string"
      }
    },
    condition: {
      shape: {
        type: "string"
      }
    },
    actions: {
      shape: _Actions
    },
    nextState: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
