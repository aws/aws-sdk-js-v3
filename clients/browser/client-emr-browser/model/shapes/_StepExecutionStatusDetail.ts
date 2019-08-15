import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StepExecutionStatusDetail: _Structure_ = {
  type: "structure",
  required: ["State", "CreationDateTime"],
  members: {
    State: {
      shape: {
        type: "string"
      }
    },
    CreationDateTime: {
      shape: {
        type: "timestamp"
      }
    },
    StartDateTime: {
      shape: {
        type: "timestamp"
      }
    },
    EndDateTime: {
      shape: {
        type: "timestamp"
      }
    },
    LastStateChangeReason: {
      shape: {
        type: "string"
      }
    }
  }
};
