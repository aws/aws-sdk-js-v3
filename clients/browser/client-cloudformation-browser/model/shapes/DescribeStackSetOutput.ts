import { _StackSet } from "./_StackSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeStackSetOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StackSet: {
      shape: _StackSet
    }
  }
};
