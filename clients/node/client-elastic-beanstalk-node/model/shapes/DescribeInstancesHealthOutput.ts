import { _InstanceHealthList } from "./_InstanceHealthList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeInstancesHealthOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InstanceHealthList: {
      shape: _InstanceHealthList
    },
    RefreshedAt: {
      shape: {
        type: "timestamp"
      }
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
