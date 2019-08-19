import { _Metrics } from "./_Metrics";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DisableMetricsCollectionInput: _Structure_ = {
  type: "structure",
  required: ["AutoScalingGroupName"],
  members: {
    AutoScalingGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Metrics: {
      shape: _Metrics
    }
  }
};
