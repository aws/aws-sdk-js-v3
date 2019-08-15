import { _StepStateChangeReason } from "./_StepStateChangeReason";
import { _FailureDetails } from "./_FailureDetails";
import { _StepTimeline } from "./_StepTimeline";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StepStatus: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    State: {
      shape: {
        type: "string"
      }
    },
    StateChangeReason: {
      shape: _StepStateChangeReason
    },
    FailureDetails: {
      shape: _FailureDetails
    },
    Timeline: {
      shape: _StepTimeline
    }
  }
};
