import { _Strings } from "./_Strings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEcsClustersInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EcsClusterArns: {
      shape: _Strings
    },
    StackId: {
      shape: {
        type: "string"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer"
      }
    }
  }
};
