import { _StackList } from "./_StackList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeStacksOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Stacks: {
      shape: _StackList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
