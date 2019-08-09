import { _ScalingParametersStatus } from "./_ScalingParametersStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeScalingParametersOutput: _Structure_ = {
  type: "structure",
  required: ["ScalingParameters"],
  members: {
    ScalingParameters: {
      shape: _ScalingParametersStatus
    }
  }
};
