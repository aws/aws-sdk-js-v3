import { _ComputeEnvironmentDetailList } from "./_ComputeEnvironmentDetailList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeComputeEnvironmentsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    computeEnvironments: {
      shape: _ComputeEnvironmentDetailList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
