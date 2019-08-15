import { _Stacks } from "./_Stacks";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeStacksOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Stacks: {
      shape: _Stacks
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
