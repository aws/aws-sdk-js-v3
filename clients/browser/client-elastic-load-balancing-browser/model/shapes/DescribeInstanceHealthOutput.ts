import { _InstanceStates } from "./_InstanceStates";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeInstanceHealthOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InstanceStates: {
      shape: _InstanceStates
    }
  }
};
