import { _RegionList } from "./_RegionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StackSetOperationPreferences: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RegionOrder: {
      shape: _RegionList
    },
    FailureToleranceCount: {
      shape: {
        type: "integer"
      }
    },
    FailureTolerancePercentage: {
      shape: {
        type: "integer"
      }
    },
    MaxConcurrentCount: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    MaxConcurrentPercentage: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
