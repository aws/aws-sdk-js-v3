import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RemediationExecutionStep: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    State: {
      shape: {
        type: "string"
      }
    },
    ErrorMessage: {
      shape: {
        type: "string"
      }
    },
    StartTime: {
      shape: {
        type: "timestamp"
      }
    },
    StopTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
