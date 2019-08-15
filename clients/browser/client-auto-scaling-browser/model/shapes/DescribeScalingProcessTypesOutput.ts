import { _Processes } from "./_Processes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeScalingProcessTypesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Processes: {
      shape: _Processes
    }
  }
};
