import { _Limits } from "./_Limits";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Subscription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
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
    TimeCommitmentInSeconds: {
      shape: {
        type: "integer"
      }
    },
    AutoRenew: {
      shape: {
        type: "string"
      }
    },
    Limits: {
      shape: _Limits
    }
  }
};
