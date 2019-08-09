import { _InstancesHealthAttributes } from "./_InstancesHealthAttributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeInstancesHealthInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EnvironmentName: {
      shape: {
        type: "string",
        min: 4
      }
    },
    EnvironmentId: {
      shape: {
        type: "string"
      }
    },
    AttributeNames: {
      shape: _InstancesHealthAttributes
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
