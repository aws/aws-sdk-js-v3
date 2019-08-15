import { _RateIncreaseCriteria } from "./_RateIncreaseCriteria";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ExponentialRolloutRate: _Structure_ = {
  type: "structure",
  required: ["baseRatePerMinute", "incrementFactor", "rateIncreaseCriteria"],
  members: {
    baseRatePerMinute: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    incrementFactor: {
      shape: {
        type: "float",
        min: 1
      }
    },
    rateIncreaseCriteria: {
      shape: _RateIncreaseCriteria
    }
  }
};
