import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NotifyWorkersFailureStatus: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NotifyWorkersFailureCode: {
      shape: {
        type: "string"
      }
    },
    NotifyWorkersFailureMessage: {
      shape: {
        type: "string"
      }
    },
    WorkerId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
