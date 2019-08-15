import { _InstanceList } from "./_InstanceList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeInstancesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Instances: {
      shape: _InstanceList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
