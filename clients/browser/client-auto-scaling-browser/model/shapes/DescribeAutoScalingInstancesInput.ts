import { _InstanceIds } from "./_InstanceIds";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAutoScalingInstancesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InstanceIds: {
      shape: _InstanceIds
    },
    MaxRecords: {
      shape: {
        type: "integer"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
