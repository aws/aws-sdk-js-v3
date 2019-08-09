import { _TargetGroupArns } from "./_TargetGroupArns";
import { _TargetGroupNames } from "./_TargetGroupNames";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTargetGroupsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LoadBalancerArn: {
      shape: {
        type: "string"
      }
    },
    TargetGroupArns: {
      shape: _TargetGroupArns
    },
    Names: {
      shape: _TargetGroupNames
    },
    Marker: {
      shape: {
        type: "string"
      }
    },
    PageSize: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
