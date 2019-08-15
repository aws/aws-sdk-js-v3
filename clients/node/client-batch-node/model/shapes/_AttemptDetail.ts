import { _AttemptContainerDetail } from "./_AttemptContainerDetail";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AttemptDetail: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    container: {
      shape: _AttemptContainerDetail
    },
    startedAt: {
      shape: {
        type: "integer"
      }
    },
    stoppedAt: {
      shape: {
        type: "integer"
      }
    },
    statusReason: {
      shape: {
        type: "string"
      }
    }
  }
};
