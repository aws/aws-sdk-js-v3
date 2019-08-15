import { _LoadBasedAutoScalingConfigurations } from "./_LoadBasedAutoScalingConfigurations";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeLoadBasedAutoScalingOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LoadBasedAutoScalingConfigurations: {
      shape: _LoadBasedAutoScalingConfigurations
    }
  }
};
