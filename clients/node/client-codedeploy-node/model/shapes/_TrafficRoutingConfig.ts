import { _TimeBasedCanary } from "./_TimeBasedCanary";
import { _TimeBasedLinear } from "./_TimeBasedLinear";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TrafficRoutingConfig: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    type: {
      shape: {
        type: "string"
      }
    },
    timeBasedCanary: {
      shape: _TimeBasedCanary
    },
    timeBasedLinear: {
      shape: _TimeBasedLinear
    }
  }
};
