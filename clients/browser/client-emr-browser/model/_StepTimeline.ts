import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StepTimeline: _Structure_ = {
  type: "structure",
  required: [],
  members: {
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
    }
  }
};
