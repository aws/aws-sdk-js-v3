import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SecondaryStatusTransition: _Structure_ = {
  type: "structure",
  required: ["Status", "StartTime"],
  members: {
    Status: {
      shape: {
        type: "string"
      }
    },
    StartTime: {
      shape: {
        type: "timestamp"
      }
    },
    EndTime: {
      shape: {
        type: "timestamp"
      }
    },
    StatusMessage: {
      shape: {
        type: "string"
      }
    }
  }
};
