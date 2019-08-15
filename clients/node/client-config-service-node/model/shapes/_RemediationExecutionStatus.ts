import { _ResourceKey } from "./_ResourceKey";
import { _RemediationExecutionSteps } from "./_RemediationExecutionSteps";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RemediationExecutionStatus: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ResourceKey: {
      shape: _ResourceKey
    },
    State: {
      shape: {
        type: "string"
      }
    },
    StepDetails: {
      shape: _RemediationExecutionSteps
    },
    InvocationTime: {
      shape: {
        type: "timestamp"
      }
    },
    LastUpdatedTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
