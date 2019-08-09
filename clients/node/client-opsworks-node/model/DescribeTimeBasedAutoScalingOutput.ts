import { _TimeBasedAutoScalingConfigurations } from "./_TimeBasedAutoScalingConfigurations";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTimeBasedAutoScalingOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TimeBasedAutoScalingConfigurations: {
      shape: _TimeBasedAutoScalingConfigurations
    }
  }
};
