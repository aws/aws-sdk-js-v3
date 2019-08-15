import { _ScalableTargets } from "./_ScalableTargets";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeScalableTargetsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ScalableTargets: {
      shape: _ScalableTargets
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
