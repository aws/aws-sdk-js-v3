import { _StringList } from "./_StringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeComputeEnvironmentsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    computeEnvironments: {
      shape: _StringList
    },
    maxResults: {
      shape: {
        type: "integer"
      }
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
