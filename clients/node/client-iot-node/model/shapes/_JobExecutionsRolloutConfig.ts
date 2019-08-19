import { _ExponentialRolloutRate } from "./_ExponentialRolloutRate";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _JobExecutionsRolloutConfig: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    maximumPerMinute: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    exponentialRate: {
      shape: _ExponentialRolloutRate
    }
  }
};
