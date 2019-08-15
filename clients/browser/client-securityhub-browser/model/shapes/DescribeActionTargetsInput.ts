import { _ArnList } from "./_ArnList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeActionTargetsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ActionTargetArns: {
      shape: _ArnList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
